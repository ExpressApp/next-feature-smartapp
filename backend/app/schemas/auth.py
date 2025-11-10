"""Auth data objects."""

from contextvars import ContextVar
from typing import Optional

open_id_token: ContextVar[Optional[str]] = ContextVar("open_id_token")
