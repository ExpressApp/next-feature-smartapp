"""Module for enums."""
from enum import Enum


class StrEnum(str, Enum):  # noqa: WPS600
    """Base enum."""


class AutoStrEnum(StrEnum):
    def _generate_next_value_(  # type: ignore  # noqa: WPS120
        name, start, count, last_values  # noqa: N805
    ):
        return name
