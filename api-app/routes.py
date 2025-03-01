from fastapi import Query, Depends, HTTPException
from fastapi.encoders import jsonable_encoder

from fastapi_admin.depends import get_resources
from fastapi_admin.template import templates
from fastapi_admin.app import app

from starlette.requests import Request

from models import Admin, User, Collection, Painting, Technique
import settings


@app.get('/')
async def home(
    request: Request,
    resources=Depends(get_resources),
):
    return templates.TemplateResponse(
        "dashboard.html",
        context={
            "request": request,
            "resources": resources,
            "resource_label": "Dashboard",
            "page_pre_title": "overview",
            "page_title": "Dashboard",
        },
    )


async def get_full_user_data(username: str):
    user = await User.get_or_none(username=username).prefetch_related("collections__paintings")

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return jsonable_encoder({"user": user})


async def get_lot(lot_id: int):
    lot = await Painting.get_or_none(id=lot_id).prefetch_related("technique")

    if not lot:
        raise HTTPException(status_code=404, detail="Lot not found")

    return jsonable_encoder({"lot": lot})


async def search_collections(q: str = Query(...)):
    collections = await Collection.filter(name__icontains=q).values("id", "name")
    return collections


async def search_user(q: str = Query(...)):
    users = await User.filter(username__icontains=q).values("id", "username")
    return users


async def search_techniques(q: str = Query(...)):
    techniques = await Technique.filter(name__icontains=q).values("id", "name")
    return techniques


async def create_admin(secret_admin_key: str, admin_username: str, admin_password: str):
    if secret_admin_key == settings.SECRET_KEY:
        await Admin.create(
            username=admin_username,
            password=admin_password
        )
    return {
        'username': admin_username, 'password': admin_password
    }
