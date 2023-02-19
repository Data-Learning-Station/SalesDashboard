import os

from fastapi import UploadFile
from passlib.context import CryptContext
from uuid import uuid4

import aiofiles

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str):
    return pwd_context.hash(password)


def verify_password(password: str, hashed_password: str):
    return pwd_context.verify(password, hashed_password)

async def saveFile(file: UploadFile):

    _, ext = os.path.splitext(file.filename)
    filename = str(uuid4()) + '.' + ext
    out_file_path = './uploads/' + filename

    async with aiofiles.open(out_file_path, 'wb') as out_file:
        content = await file.read()  # async read
        await out_file.write(content)
        
    return filename

def removeFile(path):
    os.remove(path)