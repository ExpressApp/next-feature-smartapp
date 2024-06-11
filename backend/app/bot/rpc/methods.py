"""RPC methods."""
import asyncio
import json
from typing import Any, Callable, Dict
from uuid import UUID

from pybotx_smartapp_rpc import (
    RPCArgsBaseModel,
    RPCError,
    RPCErrorExc,
    RPCResultResponse,
    SmartApp,
)
from pydantic import Field, validator

from app.bot.feature_router import FeatureRouter
from app.schemas.menu import FeatureMenu
from app.services import ui_elements
from app.services.answers import (
    build_file_meta_text,
    build_static_image_url,
    build_user_from_search_text,
)
from app.services.botx_user_search import (
    UserIsBotError,
    UserNotFoundError,
    search_user_on_each_cts,
)

rpc = FeatureRouter()


async def call_with_delay(
    delay: float, func: Callable[..., Any], *args: Any, **kwargs: Any
) -> None:
    await asyncio.sleep(delay)
    await func(*args, **kwargs)


class EchoArgs(RPCArgsBaseModel):
    text: str  # noqa: WPS110


@rpc.method("menu")
async def menu(smartapp: SmartApp) -> RPCResultResponse[FeatureMenu]:
    rpc_methods = (
        smartapp.bot.state.smartapp_rpc._router.rpc_methods  # noqa: WPS219, WPS437
    )
    features = []
    for _, method in rpc_methods.items():
        if hasattr(method.handler, "feature"):  # noqa: WPS421
            features.append(method.handler.feature)

    return RPCResultResponse(features)


@rpc.feature(
    "echo",
    name="Echo",
    ui_elements=[ui_elements.text_input],
)
async def echo(smartapp: SmartApp, rpc_arguments: EchoArgs) -> RPCResultResponse[str]:
    return RPCResultResponse(rpc_arguments.text)


class UpdateAppCounterArgs(RPCArgsBaseModel):
    count: int
    text: str
    delay: float


@rpc.feature(
    "send_push",
    name="Send push",
    ui_elements=[
        ui_elements.count_input,
        ui_elements.text_input,
        ui_elements.delay_input,
    ],
)
async def send_push(
    smartapp: SmartApp, rpc_arguments: UpdateAppCounterArgs
) -> RPCResultResponse[None]:
    asyncio.create_task(
        call_with_delay(
            rpc_arguments.delay,
            smartapp.send_push,
            rpc_arguments.count,
            rpc_arguments.text,
        )
    )
    return RPCResultResponse(f"Notification will be sent in {rpc_arguments.delay} sec")


class SendPushArgs(RPCArgsBaseModel):
    title: str
    body: str
    meta: Dict[str, Any] = Field(default_factory=dict)
    delay: float

    @validator("meta", pre=True)
    @classmethod
    def parse_configuration(cls, value: Any) -> Dict[str, Any]:  # noqa: WPS110
        if isinstance(value, str):
            return json.loads(value)
        return value


@rpc.feature(
    "send_custom_push",
    name="Send custom push",
    ui_elements=[
        ui_elements.title_input,
        ui_elements.body_input,
        ui_elements.meta_input,
        ui_elements.delay_input,
    ],
)
async def send_custom_push(
    smartapp: SmartApp, rpc_arguments: SendPushArgs
) -> RPCResultResponse[str]:
    asyncio.create_task(
        call_with_delay(
            rpc_arguments.delay,
            smartapp.send_custom_push,
            rpc_arguments.title,
            rpc_arguments.body,
            rpc_arguments.meta,
        )
    )
    return RPCResultResponse(f"Push will be sent in {rpc_arguments.delay} sec")


class SendNotificationArgs(RPCArgsBaseModel):
    delay: float


@rpc.feature(
    "send_notification",
    name="Send notification",
    ui_elements=[ui_elements.delay_input],
)
async def send_notification(
    smartapp: SmartApp, rpc_arguments: SendNotificationArgs
) -> RPCResultResponse[str]:
    asyncio.create_task(
        call_with_delay(rpc_arguments.delay, smartapp.send_event, "Notification")
    )
    return RPCResultResponse(f"Notification will be sent in {rpc_arguments.delay} sec")


@rpc.feature("echo_file", name="Echo file", ui_elements=[ui_elements.file_picker])
async def echo_file(smartapp: SmartApp) -> RPCResultResponse[str]:
    try:
        async_file = smartapp.event.files[0]
    except IndexError:
        raise RPCErrorExc(
            RPCError(
                reason="Async files required",
                id="ASYNC_FILES_REQUIRED",
            )
        )

    return RPCResultResponse(build_file_meta_text(async_file), files=[async_file])


@rpc.feature("echo_files", name="Echo files", ui_elements=[ui_elements.files_picker])
async def echo_files(smartapp: SmartApp) -> RPCResultResponse[str]:
    async_files = smartapp.event.files
    if not async_files:
        raise RPCErrorExc(
            RPCError(
                reason="Async files required",
                id="ASYNC_FILES_REQUIRED",
            )
        )

    return RPCResultResponse(
        "\n\n".join([build_file_meta_text(file_meta) for file_meta in async_files]),
        files=async_files,
    )


class SearchUsersArgs(RPCArgsBaseModel):
    huids: list[UUID]


@rpc.feature("search_users", name="Search users", ui_elements=[ui_elements.huids_input])
async def search_users(
    smartapp: SmartApp, rpc_arguments: SearchUsersArgs
) -> RPCResultResponse[str]:
    search_results = []
    for huid in rpc_arguments.huids:
        try:
            user, _ = await search_user_on_each_cts(smartapp.bot, huid)
        except UserIsBotError:
            search_results.append(f"{huid} is bot")
            continue
        except UserNotFoundError:
            search_results.append(f"{huid} not found")
            continue

        search_results.append(build_user_from_search_text(user))

    return RPCResultResponse("\n\n".join(search_results))


@rpc.feature(
    "echo_static_file", name="Echo static file", ui_elements=[ui_elements.file_picker]
)
async def echo_static_file(smartapp: SmartApp) -> RPCResultResponse[str]:
    try:
        async_file = smartapp.event.files[0]
    except IndexError:
        raise RPCErrorExc(
            RPCError(
                reason="Async files required",
                id="ASYNC_FILES_REQUIRED",
            )
        )

    return RPCResultResponse(await build_static_image_url(async_file, smartapp))
