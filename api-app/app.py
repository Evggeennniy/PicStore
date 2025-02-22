import os
import asyncio

from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi_admin.app import app as admin_app
from fastapi_admin.resources import Field, Model
from fastapi_admin.providers.login import UsernamePasswordProvider
from fastapi_admin.widgets import displays, filters, inputs

from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.orm import sessionmaker
from sqlalchemy import text

from sqladmin import Admin as SqlAdmin


load_dotenv()

# Base settings
SECRET_KEY = os.getenv('SECRET_KEY')
ADM_SECRET_KEY = os.getenv('ADM_SECRET_KEY')
BASE_DIR = os.getcwd()
UPLOAD_DIR = os.path.join(BASE_DIR, "static", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


def init_app() -> FastAPI:
    import admin
    import routes
    import database

    # FastApi settings
    api_app = FastAPI(debug=True)
    api_app.add_api_route('/api', routes.index)
    api_app.add_api_route('/api/users/{username}', routes.get_user_full_data)
    api_app.add_api_route('/api/lots/{lot_id}', routes.get_lot)
    api_app.add_api_route('/api/collections/', routes.search_collections)
    api_app.mount("/static", StaticFiles(directory=UPLOAD_DIR), name="static")

    # TODO replace to TortoiseADMIN
    # Admin panel settings
    authentication_backend = admin.AdminAuth(secret_key=SECRET_KEY)
    admin_app = SqlAdmin(api_app, database.engine, authentication_backend=authentication_backend)
    admin_app.add_view(admin.UserAdmin)
    admin_app.add_view(admin.TechniqueAdmin)
    admin_app.add_view(admin.CollectionAdmin)
    admin_app.add_view(admin.PaintingAdmin)

    # Pre-run operations

    @api_app.on_event("startup")
    async def startup():
        await database.init_db()

    return api_app


app: FastAPI = init_app()
