"""Middleware to send incoming smartapp events in chat."""
from pybotx_smartapp_rpc import RPCArgsBaseModel, SmartApp
from pybotx_smartapp_rpc.typing import Handler, RPCResponse

from app.services.answers import build_incoming_smartapp_event_text


async def debug_middleware(
    smartapp: SmartApp, rpc_arguments: RPCArgsBaseModel, call_next: Handler
) -> RPCResponse:
    await smartapp.bot.answer_message(
        build_incoming_smartapp_event_text(smartapp.event.raw_command)
    )

    return await call_next(smartapp, rpc_arguments)
