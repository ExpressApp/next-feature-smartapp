"""Application settings."""

from typing import Any
from uuid import UUID

from pybotx import BotAccountWithSecret
from pydantic import BaseSettings, validator


class AppSettings(BaseSettings):
    class Config:  # noqa: WPS431
        env_file = ".env"

    # TODO: Change type to `list[BotAccountWithSecret]` after closing:
    # https://github.com/samuelcolvin/pydantic/issues/1458
    BOT_CREDENTIALS: Any

    # base kwargs
    DEBUG: bool = False

    @validator("BOT_CREDENTIALS", pre=True)
    @classmethod
    def parse_bot_credentials(cls, raw_credentials: str) -> list[BotAccountWithSecret]:
        """Parse bot credentials separated by comma.

        Each entry must be separated by "@" or "|".
        """
        if not raw_credentials:
            raise ValueError("`BOT_CREDENTIALS` can't be empty")

        return [
            cls._build_credentials_from_string(credentials_str)
            for credentials_str in raw_credentials.replace(",", " ").split()
        ]

    @classmethod
    def _build_credentials_from_string(
        cls, credentials_str: str
    ) -> BotAccountWithSecret:
        credentials_str = credentials_str.replace("|", "@")
        assert credentials_str.count("@") == 2, "Have you forgot to add `bot_id`?"

        cts_url, secret_key, bot_id = [
            str_value.strip() for str_value in credentials_str.split("@")
        ]

        if "://" not in cts_url:
            cts_url = f"https://{cts_url}"

        return BotAccountWithSecret(
            id=UUID(bot_id), cts_url=cts_url, secret_key=secret_key
        )


settings = AppSettings()
