import uvicorn

import redis.asyncio as redis

from contextlib import asynccontextmanager

from fastapi import FastAPI, Depends, Form
from fastapi.staticfiles import StaticFiles

from fastapi_admin.app import app as admin_app
from fastapi_admin.depends import get_current_admin, get_resources
from fastapi_admin.exceptions import (
    forbidden_error_exception,
    not_found_error_exception,
    server_error_exception,
    unauthorized_error_exception,
)

from starlette.middleware.cors import CORSMiddleware
from starlette.status import (
    HTTP_401_UNAUTHORIZED,
    HTTP_403_FORBIDDEN,
    HTTP_404_NOT_FOUND,
    HTTP_500_INTERNAL_SERVER_ERROR,
)

from tortoise.contrib.fastapi import register_tortoise

import admin
import routes
import settings
import providers
from models import Admin


@asynccontextmanager
async def lifespan(app: FastAPI):
    r = redis.from_url(
        settings.REDIS_URL,
        decode_responses=True,
        encoding="utf8",
    )
    await admin_app.configure(
        logo_url="https://preview.tabler.io/static/logo-white.svg",
        favicon_url="https://raw.githubusercontent.com/fastapi-admin/fastapi-admin/dev/images/favicon.png",
        providers=[
            providers.LoginProvider(
                login_logo_url="https://preview.tabler.io/static/logo.svg",
                admin_model=Admin,
            )
        ],
        redis=r,
    )
    yield


def create_app():

    app = FastAPI(lifespan=lifespan, debug=True)
    app.mount("/static", StaticFiles(directory=settings.UPLOAD_DIR), name="static")

    app.add_api_route("/api", routes.index)
    app.add_api_route("/api/users/{username}", routes.get_full_user_data)
    app.add_api_route("/api/lots/{lot_id}", routes.get_lot)
    app.add_api_route("/api/collections/", routes.search_collections)
    app.add_api_route("/api/techniques/", routes.search_techniques)
    app.add_api_route("/create_admin/{secret_admin_key}/{admin_username}/{admin_password}", routes.create_admin)

    admin_app.add_exception_handler(HTTP_500_INTERNAL_SERVER_ERROR, server_error_exception)
    admin_app.add_exception_handler(HTTP_404_NOT_FOUND, not_found_error_exception)
    admin_app.add_exception_handler(HTTP_403_FORBIDDEN, forbidden_error_exception)
    admin_app.add_exception_handler(HTTP_401_UNAUTHORIZED, unauthorized_error_exception)

    app.mount("/admin", admin_app)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["*"],
    )

    register_tortoise(
        app,
        config={
            "connections": {"default": settings.DATABASE_URL},
            "apps": {
                "models": {
                    "models": ["models",],
                    "default_connection": "default",
                }
            },
        },
        generate_schemas=True,
    )

    return app


app_ = create_app()

if __name__ == "__main__":
    uvicorn.run("app:app_", reload=True)
