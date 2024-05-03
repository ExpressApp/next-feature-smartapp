"""Endpoints for communication with botx."""

from http import HTTPStatus

from fastapi import APIRouter, Request
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pybotx import (
    Bot,
    UnknownBotAccountError,
    build_bot_disabled_response,
    build_command_accepted_response,
)
from pybotx_smartapp_rpc import SmartApp
from pybotx_smartapp_rpc.models.request import RPCRequest

from app.api.dependencies.bot import bot_dependency
from app.schemas.sync_request import (
    SyncRequest,
    transfrorm_sync_request_to_smartapp_event,
)
from app.logger import logger

router = APIRouter()


@router.post("/command")
async def command_handler(request: Request, bot: Bot = bot_dependency) -> JSONResponse:
    """Receive commands from users. Max timeout - 5 seconds."""
    try:
        bot.async_execute_raw_bot_command(await request.json())
    except ValueError:
        error_label = "Bot command validation error"
        logger.exception(error_label)

        return JSONResponse(
            build_bot_disabled_response(error_label),
            status_code=HTTPStatus.SERVICE_UNAVAILABLE,
        )
    except UnknownBotAccountError as exc:
        error_label = f"No credentials for bot {exc.bot_id}"
        logger.warning(error_label)

        return JSONResponse(
            build_bot_disabled_response(error_label),
            status_code=HTTPStatus.SERVICE_UNAVAILABLE,
        )

    return JSONResponse(
        build_command_accepted_response(), status_code=HTTPStatus.ACCEPTED
    )


@router.get("/status")
async def status_handler(request: Request, bot: Bot = bot_dependency) -> JSONResponse:
    """Show bot status and commands list."""
    status = await bot.raw_get_status(dict(request.query_params))
    return JSONResponse(status)


@router.post("/notification/callback")
async def callback_handler(request: Request, bot: Bot = bot_dependency) -> JSONResponse:
    """Process BotX methods callbacks."""
    await bot.set_raw_botx_method_result(await request.json())
    return JSONResponse(
        build_command_accepted_response(),
        status_code=HTTPStatus.ACCEPTED,
    )


@router.post("/smartapps/request")
async def sync_request_handler(
    request: SyncRequest, bot: Bot = bot_dependency
) -> JSONResponse:
    smartapp_event = transfrorm_sync_request_to_smartapp_event(request, bot)
    smartapp = SmartApp(
        bot, smartapp_event.bot.id, smartapp_event.chat.id, smartapp_event
    )
    rpc_request = RPCRequest(**smartapp_event.data)

    rpc_response = (
        await bot.state.smartapp_rpc._router.perform_rpc_request(  # noqa: WPS437
            smartapp, rpc_request
        )
    )

    json = jsonable_encoder(rpc_response.jsonable_dict())
    return JSONResponse(json)
