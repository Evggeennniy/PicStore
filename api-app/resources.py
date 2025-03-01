import os
from typing import List

from starlette.requests import Request

from settings import BASE_DIR
from fastapi_admin.app import app
from fastapi_admin.enums import Method
from fastapi_admin.file_upload import FileUpload
from fastapi_admin.resources import Action, Dropdown, Field, Link, Model, ToolbarAction
from fastapi_admin.widgets import displays, filters, inputs

import models
from fastapi_admin.models import AbstractAdmin


upload = FileUpload(uploads_dir=os.path.join(BASE_DIR, "static", "uploads"))


@app.register
class Dashboard(Link):
    label = "Dashboard"
    icon = "fas fa-home"
    url = "/admin"


@app.register
class AdminResource(Model):
    label = "Admins"
    model = models.Admin
    icon = "fas fa-user"
    page_pre_title = "admin list"
    page_title = "admins data"


@app.register
class UserResource(Model):
    label = "Users"
    model = models.User
    icon = "fas fa-user"
    page_pre_title = "user list"
    page_title = "users data"

    fields = [
        "id",
        "username",
        Field(
            name="password",
            label="Password",
            display=displays.InputOnly(),
            input_=inputs.Password(),
        ),
        Field(name="email", label="Email", input_=inputs.Email()),
        Field(
            name="avatar",
            label="Avatar",
            display=displays.Image(width="40"),
            input_=inputs.Image(null=True, upload=upload),
        ),

    ]


@app.register
class CollectionResource(Model):
    label = "Collections"
    model = models.Collection
    icon = "fas fa-user"
    page_pre_title = "collection list"
    page_title = "collections data"


@app.register
class TechniqueResource(Model):
    label = "Techniques"
    model = models.Technique
    icon = "fas fa-user"
    page_pre_title = "technique list"
    page_title = "techniques data"


@app.register
class PaintingResource(Model):
    label = "Paintings"
    model = models.Painting
    icon = "fas fa-user"
    page_pre_title = "painting list"
    page_title = "paintings data"
