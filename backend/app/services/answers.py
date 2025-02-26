"""Answer builders."""
from typing import Any, Dict

from aiofiles.tempfile import SpooledTemporaryFile
from aiofiles.threadpool import open as aioopen
from pybotx import File, Image, UserFromSearch
from pybotx_smartapp_rpc import SmartApp

from app.services.beautify import beautify_dict


def build_incoming_smartapp_event_text(event: Dict[str, Any]) -> str:
    json = beautify_dict(event)[:3000]
    return f"Incoming:\n```{json}```"


def build_outgoing_smartapp_event_text(event: Dict[str, Any]) -> str:
    json = beautify_dict(event)[:3000]
    return f"Outgoing:\n```{json}```"


def build_smartapp_notification_text(event: Dict[str, Any]) -> str:
    json = beautify_dict(event)[:3000]
    return f"Event:\n```{json}```"


def build_file_meta_text(meta_file: File) -> str:
    return (
        f"Name: **{meta_file.filename}**\n"
        f"File ID: **{meta_file._file_id}**\n"
        f"Mime type: **{meta_file._file_mimetype}**\n"
        f"Size: **{meta_file.size}**\n"
        f"Url: **{meta_file._file_url}**\n"
    )


def build_user_from_search_text(user: UserFromSearch) -> str:
    ad_login = user.ad_login or ""
    ad_domain = user.ad_domain or ""
    company = user.company or ""
    position = user.company_position or ""
    department = user.department or ""

    return (
        f"Huid: **{user.huid}**\n"
        f"Name: **{user.username}**\n"
        f"AD login: **{ad_login}**\n"
        f"AD domain: **{ad_domain}**\n"
        f"Company: **{company}**\n"
        f"Position: **{position}**\n"
        f"Department: **{department}**"
    )


async def build_static_image_url(image_file: Image, smartapp: SmartApp) -> str:
    async with SpooledTemporaryFile() as async_buffer:
        await smartapp.bot.download_file(
            bot_id=smartapp.bot_id,
            chat_id=smartapp.chat_id,
            file_id=image_file._file_id,
            async_buffer=async_buffer,
        )

        link = await smartapp.bot.upload_static_file(
            bot_id=smartapp.bot_id,
            filename=image_file.filename,
            async_buffer=async_buffer,
        )

    return link


async def build_example_file_meta(file_type: str, smartapp: SmartApp) -> str:
    filename = "./app/resources/example_files/eicar.com" if file_type == "infected" else "./app/resources/example_files/logo.png"

    async with aioopen(filename, mode="rb") as file:
        file = await smartapp.bot.upload_file(
            bot_id=smartapp.bot_id,
            chat_id=smartapp.chat_id,
            async_buffer=file,
            filename=filename,
        )

    return file
