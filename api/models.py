from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, Text
from sqlalchemy.orm import relationship
from database import Base
from fastapi_admin.models import AbstractAdmin


# Модель User
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, autoincrement=True, primary_key=True,)
    avatar = Column(String(64), nullable=True)
    background = Column(String(64), nullable=True)
    username = Column(String(16), index=True, unique=True, nullable=False)
    name = Column(String(16), nullable=False)
    surname = Column(String(16), nullable=False)
    about = Column(String(512), nullable=True)
    phone_number = Column(Integer, nullable=True)
    telegram = Column(String(64), nullable=True)
    tiktok = Column(String(64), nullable=True)
    instagram = Column(String(64), nullable=True)
    country = Column(String(64), nullable=True)
    city = Column(String(16), nullable=True)
    experience = Column(Integer, default=0)
    open_deals = Column(Integer, default=0)  # Delete
    closed_deals = Column(Integer, default=0)
    is_active = Column(Boolean, default=False)
    is_admin = Column(Boolean, default=False)
    password = Column(String(128), nullable=False)

    collections = relationship('Collection', back_populates='owner')

    def __str__(self):
        return self.username


# Модель Technique
class Technique(Base):
    __tablename__ = "techniques"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(16), nullable=False)

    paintings = relationship('Painting', back_populates='technique')

    def __str__(self):
        return self.name


# Модель Collection
class Collection(Base):
    __tablename__ = "collections"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(16), nullable=False)
    owner_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    owner = relationship('User', back_populates='collections')
    paintings = relationship('Painting', back_populates='collection')

    def __str__(self):
        return self.name


class Painting(Base):
    __tablename__ = "paintings"

    id = Column(Integer, primary_key=True, autoincrement=True)
    image = Column(String(64), nullable=False)
    name = Column(String(32), nullable=False)
    description = Column(String(512), nullable=False)
    height = Column(Integer, nullable=False)
    width = Column(Integer, nullable=False)
    price = Column(Integer, nullable=False)

    technique_id = Column(Integer, ForeignKey('techniques.id'), nullable=True)
    technique = relationship('Technique', back_populates='paintings')
    collection_id = Column(Integer, ForeignKey('collections.id'), nullable=True)
    collection = relationship('Collection', back_populates='paintings')

    def __str__(self):
        return self.name
