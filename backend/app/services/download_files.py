"""Example files for the file download feature."""
import asyncio
import os
import time
from typing import Any, Dict, List, Tuple
from uuid import uuid4

from aiofiles.threadpool import open as aioopen
from pybotx import File
from pybotx_smartapp_rpc import SmartApp

EXAMPLE_FILES_DIRECTORY = "./app/resources/example_files"
EXAMPLE_FILES_NAMES = (
    "example-download-1.pdf",
    "example-download-2.pdf",
    "example-download-3.pdf",
)
MISSING_FILE_NAME = "not-existing-file.pdf"

# Links to files in file service expire, so cached records are refreshed.
CACHE_TTL_MINUTES = 30
CACHE_TTL_SECONDS = CACHE_TTL_MINUTES * 60  # noqa: WPS432

FilePayload = Dict[str, Any]
FilesCache = Dict[str, Tuple[float, List[FilePayload]]]

# Uploaded files are cached per bot and chat: uploading several megabytes on
# every request is slow, and file service tokens are bound to the chat.
uploaded_files_cache: FilesCache = {}


def build_file_payload(file_meta: File) -> FilePayload:
    """Convert domain file meta into payload expected by SmartApp SDK.

    Field names are snake case, SmartApp bridge converts them to camel case.
    """
    return {
        "type": file_meta.type.value,
        "file": file_meta.file_url,
        "file_mime_type": file_meta.file_mimetype,
        "file_name": file_meta.filename,
        "file_size": file_meta.size,
        "file_hash": file_meta.file_hash,
        "file_id": str(file_meta._file_id),  # noqa: WPS437
        "file_preview": file_meta.file_preview,
        "file_preview_height": file_meta.file_preview_height,
        "file_preview_width": file_meta.file_preview_width,
        "file_encryption_algo": file_meta.file_encryption_algo,
        "chunk_size": file_meta.chunk_size,
        "key": None,
    }


async def upload_example_file(smartapp: SmartApp, filename: str) -> FilePayload:
    """Upload a single example file to file service of the bot."""
    path = os.path.join(EXAMPLE_FILES_DIRECTORY, filename)

    async with aioopen(path, mode="rb") as async_buffer:
        file_meta = await smartapp.bot.upload_file(
            bot_id=smartapp.bot_id,
            chat_id=smartapp.chat_id,
            async_buffer=async_buffer,
            filename=filename,
        )

    return build_file_payload(file_meta)


async def upload_example_files(smartapp: SmartApp) -> List[FilePayload]:
    """Upload example PDFs to file service, cache them per bot and chat."""
    cache_key = f"{smartapp.bot_id}:{smartapp.chat_id}"

    cached = uploaded_files_cache.get(cache_key)
    if cached is not None:
        cached_at, cached_payloads = cached
        if time.monotonic() - cached_at < CACHE_TTL_SECONDS:
            return cached_payloads

    payloads = await asyncio.gather(
        *[upload_example_file(smartapp, filename) for filename in EXAMPLE_FILES_NAMES]
    )

    uploaded_files_cache[cache_key] = (time.monotonic(), payloads)

    return payloads


def build_missing_file_payload(payload: FilePayload) -> FilePayload:
    """Build a record of a file that is missing on file service.

    File service never returns anything for a random path, so the client
    finishes the download with one of `FILE_DOWNLOAD_ERROR_CODE`.
    The rest of metadata is taken from a real file to keep it well formed.
    """
    missing_payload = dict(payload)
    missing_payload.update(
        {
            "file": f"/uploads/files/{uuid4()}/{uuid4()}.pdf",
            "file_id": str(uuid4()),
            "file_name": MISSING_FILE_NAME,
        }
    )

    return missing_payload
