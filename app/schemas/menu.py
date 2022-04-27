"""UI menu schemas."""
from enum import auto

from pydantic import BaseModel

from app.schemas.enums import AutoStrEnum


class UIElementTypes(AutoStrEnum):
    CHECKBOX = auto()
    SELECT = auto()
    RADIO_BUTTON = auto()
    INPUT_TEXT = auto()
    INPUT_NUMBER = auto()
    INPUT_DATE = auto()
    INPUT_UUID = auto()
    FILE_PICKER = auto()
    MULTIPLE_FILE_PICKER = auto()
    ARRAY_TEXT = auto()
    ARRAY_NUMBER = auto()
    ARRAY_DATE = auto()
    ARRAY_UUID = auto()


class UIElement(BaseModel):
    id: str
    type: UIElementTypes
    label: str


class Feature(BaseModel):
    name: str
    method: str
    ui_elements: list[UIElement]


class FeatureMenu(BaseModel):
    __root__: list[Feature]
