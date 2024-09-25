"""UI elements."""
from app.schemas.menu import UIElement, UIElementTypes

text_input = UIElement(id="text", type=UIElementTypes.INPUT_TEXT, label="Text")
title_input = UIElement(id="title", type=UIElementTypes.INPUT_TEXT, label="Title")
body_input = UIElement(id="body", type=UIElementTypes.INPUT_TEXT, label="Body")
meta_input = UIElement(id="meta", type=UIElementTypes.INPUT_TEXT, label="meta")
count_input = UIElement(id="count", type=UIElementTypes.INPUT_NUMBER, label="Count")
delay_input = UIElement(id="delay", type=UIElementTypes.INPUT_NUMBER, label="Delay")
file_picker = UIElement(id="file", type=UIElementTypes.FILE_PICKER, label="File")
files_picker = UIElement(id="files", type=UIElementTypes.FILE_PICKER, label="Files")
huids_input = UIElement(id="huids", type=UIElementTypes.ARRAY_UUID, label="Huids")
file_type = UIElement(id="file_type", type=UIElementTypes.INPUT_TEXT, label="File type")
