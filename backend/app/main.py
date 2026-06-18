"""Application with configuration for events, routers and middleware."""

from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI

from app.api.routers import router
from app.bot.bot import bot
from app.bot.smartapp import smartapp
from app.resources import strings
from app.services.static_files import StaticFilesCustomHeaders


@asynccontextmanager
async def lifespan(application: FastAPI) -> AsyncGenerator[None, None]:
    await bot.startup()
    bot.state.smartapp_rpc = smartapp
    yield
    await bot.shutdown()


def get_application() -> FastAPI:
    """Create configured server application instance."""
    application = FastAPI(title=strings.BOT_PROJECT_NAME, lifespan=lifespan)
    application.state.bot = bot

    application.include_router(router)

    application.mount(
        "/smartapp_files",
        StaticFilesCustomHeaders(
            directory="./app/resources",
            headers={
                "cache-control": "no-store, no-cache, must-revalidate",
                "expires": "-1",
            },
        ),
        name="smartapp_files",
    )

    return application


app = get_application()
