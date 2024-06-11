"""RPCRouter with UI elements."""
from typing import Callable, List, Optional

from pybotx_smartapp_rpc import RPCRouter
from pybotx_smartapp_rpc.typing import Handler, Middleware

from app.schemas.menu import Feature, UIElement


class FeatureRouter(RPCRouter):
    def feature(
        self,
        method: str,
        *,
        name: str,
        ui_elements: list[UIElement],
        middlewares: Optional[List[Middleware]] = None,
    ) -> Callable[[Handler], Handler]:
        """Smartapp feature decorator."""

        def decorator(handler: Handler) -> Handler:  # noqa: WPS110
            feature = Feature(
                name=name,
                method=method,
                ui_elements=ui_elements,
            )
            handler.feature = feature

            return self.method(method, middlewares)(handler)

        return decorator
