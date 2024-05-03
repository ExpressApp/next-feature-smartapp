"""Sync request models."""
from typing import Any, Dict
from uuid import UUID

from pybotx import (  # noqa: WPS235
    AttachmentTypes,
    Bot,
    Chat,
    ChatTypes,
    ClientPlatforms,
    Document,
    File,
    Image,
    SmartAppEvent,
    UserDevice,
    UserSender,
    Video,
    Voice,
)
from pydantic import BaseModel, validator


class SyncUserInfo(BaseModel):
    user_huid: UUID
    udid: UUID
    platform: ClientPlatforms

    @validator("platform", pre=True)
    @classmethod
    def transform_platform(cls, platform: str) -> ClientPlatforms:
        return ClientPlatforms[platform.upper()]


class SyncRequestPayload(BaseModel):
    bot_id: UUID
    data: Dict[str, Any] = {}  # noqa: WPS110
    files: list[File] = []
    opts: Dict[str, Any] = {}
    ref: UUID
    smartapp_api_version: int
    smartapp_id: UUID

    @validator("files", pre=True)
    @classmethod
    def transform_files(cls, files: list[Dict[str, Any]]) -> list[File]:
        return list(map(transform_dict_to_file, files))


class SyncRequest(BaseModel):
    """Sync request data model."""

    bot_id: UUID
    group_chat_id: UUID
    sender_info: SyncUserInfo
    method: str
    payload: SyncRequestPayload


def transform_dict_to_file(file: Dict[str, Any]) -> File:  # noqa: WPS110
    attachment_type = AttachmentTypes[str(file["type"]).upper()]
    duration = int(file["duration"]) if "duration" in file else 0

    args = {
        "type": attachment_type,
        "filename": file["file_name"],
        "size": int(file["file_size"]),
        "duration": duration,
        "is_async_file": True,
        "_file_id": UUID(file["file_id"]),
        "_file_mimetype": file["file_mime_type"],
        "_file_url": file["file"],
        "_file_hash": file["file_hash"],
    }

    if attachment_type == AttachmentTypes.IMAGE:
        return Image(**args)

    if attachment_type == AttachmentTypes.VIDEO:
        return Video(**args)

    if attachment_type == AttachmentTypes.DOCUMENT:
        return Document(**args)

    if attachment_type == AttachmentTypes.VOICE:
        return Voice(**args)

    raise NotImplementedError(f"Unsupported attachment type: {attachment_type}")


def transfrorm_sync_request_to_smartapp_event(
    request: SyncRequest, bot: Bot
) -> SmartAppEvent:
    device = UserDevice(
        platform=request.sender_info.platform,
        manufacturer="",
        device_name="",
        os="",
        pushes=True,
        timezone="",
        permissions={},
        platform_package_id="",
        app_version="",
        locale="",
    )
    sender = UserSender(
        huid=request.sender_info.user_huid,
        udid=request.sender_info.udid,
        device=device,
        ad_login="",
        ad_domain="",
        username="",
        is_chat_admin=False,
        is_chat_creator=True,
    )
    chat = Chat(
        id=request.group_chat_id,
        type=ChatTypes.PERSONAL_CHAT,
    )
    account = next(acc for acc in bot.bot_accounts if acc.id == request.bot_id)

    return SmartAppEvent(
        bot=account,
        chat=chat,
        raw_command={},  # ????
        ref=request.payload.ref,
        smartapp_id=request.payload.smartapp_id,
        data=request.payload.data,  # noqa: WPS110
        opts=request.payload.opts,
        smartapp_api_version=request.payload.smartapp_api_version,
        files=request.payload.files,
        sender=sender,
    )
