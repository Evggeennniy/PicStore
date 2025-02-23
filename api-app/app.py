import os
import asyncio
from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi_admin.app import app as admin_app
from fastapi_admin.providers.login import UsernamePasswordProvider

from tortoise.contrib.fastapi import register_tortoise
import admin
import routes

load_dotenv()


SECRET_KEY = os.getenv("SECRET_KEY")
DATABASE_URL = os.getenv("DATABASE_URL")

BASE_DIR = os.getcwd()
UPLOAD_DIR = os.path.join(BASE_DIR, "static", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


def create_app() -> FastAPI:
    app = FastAPI(debug=True)

    # Монтируем FastAPI-Admin СРАЗУ!

    app.add_api_route("/api", routes.index)
    app.add_api_route("/api/users/{username}", routes.get_full_user_data)
    app.add_api_route("/api/lots/{lot_id}", routes.get_lot)
    app.add_api_route("/api/collections/", routes.search_collections)
    app.add_api_route("/api/techniques/", routes.search_techniques)
    app.mount("/static", StaticFiles(directory=UPLOAD_DIR), name="static")
    app.mount("/admin", admin_app)

    register_tortoise(
        app,
        db_url=DATABASE_URL,
        modules={"models": ["models"]},
        generate_schemas=True,
        add_exception_handlers=True,
    )

    @app.on_event("startup")
    async def setup_admin():
        await admin_app.configure(redis="redis://localhost:6379/0")
        admin_app.register_resources(
            admin.UserAdmin, admin.TechniqueAdmin,
            admin.CollectionAdmin, admin.PaintingAdmin
        )

    return app


app = create_app()
