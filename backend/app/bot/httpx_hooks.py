"""Httpx hooks to debug outgoing requests."""
import json
import re

from httpx import Request
from pybotx.bot.contextvars import bot_var

from app.services.answers import (
    build_outgoing_smartapp_event_text,
    build_smartapp_notification_text,
)

ALLOWED_REQUEST_URL_REGEXP = re.compile(
    r"^.*?\/api\/v3\/botx\/smartapps\/(event|notification)$",
)


async def debug_smartapp(request: Request) -> None:
    url = str(request.url)

    if not ALLOWED_REQUEST_URL_REGEXP.match(url):
        return

    bot = bot_var.get()

    payload = json.loads(request.content)

    if url.endswith("event"):
        body = build_outgoing_smartapp_event_text(payload)
    elif url.endswith("notification"):
        body = build_smartapp_notification_text(payload)
    else:
        raise NotImplementedError(url)

    await bot.answer_message(body)
