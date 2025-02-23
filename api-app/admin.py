import os
from fastapi_admin.file_upload import FileUpload
from fastapi_admin.models import AbstractAdmin
from fastapi_admin.file_upload import FileUpload
from models import User, Technique, Collection, Painting

avatar_upload = FileUpload(uploads_dir="static/uploads/avatars")
background_upload = FileUpload(uploads_dir="static/uploads/backgrounds")
painting_upload = FileUpload(uploads_dir="static/uploads/paintings")


class UserAdmin(AbstractAdmin):
    resource_type = "User"
    fields = [
        "id",
        "username",
        # File(name="avatar", upload=avatar_upload, display=displays.Image()),
        # File(name="background", upload=background_upload, display=displays.Image()),
    ]


class TechniqueAdmin(AbstractAdmin):
    resource_type = "Technique"
    fields = ["id", "name"]


class CollectionAdmin(AbstractAdmin):
    resource_type = "Collection"
    fields = ["id", "name", "owner"]


class PaintingAdmin(AbstractAdmin):
    resource_type = "Painting"
    fields = [
        "id",
        "name",
        "price",
        # File(name="image", upload=painting_upload, display=displays.Image()),
        "technique",
        "collection",
    ]
