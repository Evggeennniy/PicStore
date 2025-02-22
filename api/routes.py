from fastapi import Query, Depends, File, UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi import HTTPException

from sqlalchemy.future import select
from sqlalchemy.orm import joinedload
from sqlalchemy.ext.asyncio import AsyncSession

from database import get_db
from models import User, Collection, Painting


async def index():
    return {"status": 'okay'}


async def get_user_full_data(username: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(User).where(User.username == username).options(
            joinedload(User.collections).joinedload(Collection.paintings))
    )
    user = result.scalars().first()

    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    return jsonable_encoder({"user": user})


async def get_lot(lot_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Painting).where(Painting.id == lot_id).options(
            joinedload(Painting.technique))
    )
    lot = result.scalars().first()

    if lot is None:
        raise HTTPException(status_code=404, detail="Lot not found")

    return jsonable_encoder({"lot": lot})


async def search_collections(q: str = Query(...), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Collection).where(Collection.name.ilike(f"%{q}%")))
    collections = result.scalars().all()
    return [{"id": collection.id, "name": collection.name} for collection in collections]


async def search_user(q: str = Query(...), db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(User).where(User.username.ilike(f"%{q}%")))
    users = result.scalars().all()
    return [{"id": user.id, "username": user.username} for user in users]
