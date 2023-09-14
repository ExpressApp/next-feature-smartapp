"""Configuration for bot instance."""

from httpx import AsyncClient, Limits
from pybotx import Bot

from app.bot.commands import common
from app.bot.error_handlers.internal_error import internal_error_handler
from app.bot.httpx_hooks import debug_smartapp
from app.settings import settings

bot = Bot(
    collectors=[common.collector],
    bot_accounts=settings.BOT_CREDENTIALS,
    exception_handlers={Exception: internal_error_handler},
    httpx_client=AsyncClient(
        timeout=90,  # noqa: WPS432
        limits=Limits(  # type: ignore
            max_keepalive_connections=None, max_connections=None
        ),
        event_hooks={"request": [debug_smartapp]},
    ),
)
