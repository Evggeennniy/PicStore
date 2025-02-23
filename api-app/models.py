import os
from tortoise import fields, models

from fastapi_admin.models import AbstractAdmin
import settings


class Admin(AbstractAdmin):
    pass


class User(models.Model):
    id = fields.IntField(pk=True)
    username = fields.CharField(max_length=16, unique=True, index=True)
    name = fields.CharField(max_length=16)
    surname = fields.CharField(max_length=16)
    about = fields.TextField(null=True)
    phone_number = fields.CharField(max_length=20, null=True)
    telegram = fields.CharField(max_length=64, null=True)
    tiktok = fields.CharField(max_length=64, null=True)
    instagram = fields.CharField(max_length=64, null=True)
    country = fields.CharField(max_length=64, null=True)
    city = fields.CharField(max_length=16, null=True)
    experience = fields.IntField(default=0)
    closed_deals = fields.IntField(default=0)
    is_active = fields.BooleanField(default=False)
    is_admin = fields.BooleanField(default=False)
    password = fields.CharField(max_length=128)

    avatar = fields.CharField(max_length=255, null=True)
    background = fields.CharField(max_length=255, null=True)

    collections = fields.ReverseRelation["Collection"]

    def __str__(self):
        return self.username

    def get_upload_path(self, file_type: str) -> str:
        subdir = "avatars" if file_type == "avatar" else "backgrounds"
        return os.path.join(settings.UPLOAD_DIR, subdir, f"user_{self.id}.jpg")


class Technique(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=16)

    paintings = fields.ReverseRelation["Painting"]

    def __str__(self):
        return self.name


class Collection(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=16)
    owner = fields.ForeignKeyField("models.User", related_name="collections")

    paintings = fields.ReverseRelation["Painting"]

    def __str__(self):
        return self.name


class Painting(models.Model):
    id = fields.IntField(pk=True)
    image = fields.CharField(max_length=255)
    name = fields.CharField(max_length=32)
    description = fields.TextField()
    height = fields.IntField()
    width = fields.IntField()
    price = fields.IntField()

    technique = fields.ForeignKeyField("models.Technique", related_name="paintings", null=True)
    collection = fields.ForeignKeyField("models.Collection", related_name="paintings", null=True)

    def __str__(self):
        return self.name
