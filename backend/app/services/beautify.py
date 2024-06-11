"""Beautify data."""
import json
from typing import Any, Dict
from uuid import UUID


class UUIDEncoder(json.JSONEncoder):
    def default(self, obj: Any) -> str:  # noqa: WPS110
        """Help jsonify UUID."""
        if isinstance(obj, UUID):
            return str(obj)
        return json.JSONEncoder.default(self, obj)


def beautify_dict(dict_data: Dict[Any, Any]) -> str:
    return json.dumps(dict_data, cls=UUIDEncoder, indent=4)
