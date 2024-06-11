"""Configuration for smartapp."""
from pybotx_smartapp_rpc import SmartAppRPC

from app.bot.middlewares.debug import debug_middleware
from app.bot.rpc import methods

smartapp = SmartAppRPC(routers=[methods.rpc], middlewares=[debug_middleware])
