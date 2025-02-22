import os

from sqladmin.authentication import AuthenticationBackend
from sqladmin import ModelView

from fastapi import Request

from wtforms import FileField

from models import User, Technique, Collection, Painting


class AdminAuth(AuthenticationBackend):
    async def login(self, request: Request) -> bool:
        form = await request.form()
        username, password = form['username'], form['password']

        # Проверка логина и пароля
        if username == 'admin' and password == 'admin':
            request.session.update({'token': 'admin'})
            return True
        return False

    async def logout(self, request: Request) -> bool:
        request.session.clear()
        return True

    async def authenticate(self, request: Request) -> bool:
        token = request.session.get('token')
        if token == 'admin':
            return True
        return False


class UserAdmin(ModelView, model=User):
    column_list = [User.id, User.username]
    column_searchable_list = [User.username]
    column_filters = [User.id, User.username]

    form_ajax_refs = {
        "collections": {
            "fields": ["name"],
            "url": "/api/collections/"
        }
    }


class TechniqueAdmin(ModelView, model=Technique):
    column_list = [Technique.id, Technique.name]
    form_excluded_columns = [Technique.paintings]
    column_searchable_list = [Technique.name]
    column_filters = [Technique.id, Technique.name]


class CollectionAdmin(ModelView, model=Collection):
    column_list = [Collection.id, Collection.name, Collection.owner]
    form_excluded_columns = [Collection.owner, Collection.paintings]
    column_searchable_list = [Collection.name]
    column_filters = [Collection.id, Collection.name, Collection.owner]


class PaintingAdmin(ModelView, model=Painting):
    column_list = [Painting.id, Painting.name, Painting.price, Painting.technique, Painting.collection]
    column_searchable_list = [Painting.name]
    column_filters = [Painting.id, Painting.name, Painting.price, Painting.technique, Painting.collection]
