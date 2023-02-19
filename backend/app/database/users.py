import hashlib

from fastapi import Depends
from sqlalchemy.orm import Session

from app.schemas import user
from app.database import models

from app import utils

def findUserByPhone(phone: str, db: Session):
    user = db.query(models.User).filter(models.User.phone == phone).first()
    return user

def findUserByToken(token: str, db: Session):
    user = db.query(models.User).filter(models.User.token == token).first()
    return user

def createUser(body: user.CreateUserSchema, db: Session):
    
    hashedPassword = utils.hash_password(body.password)
    
    newUser = models.User()
    
    newUser.name = body.name
    newUser.surname = body.surname
    newUser.phone = body.phone
    newUser.password = hashedPassword
    newUser.role = 'user'
    newUser.token = hashlib.md5((body.phone + body.password).encode()).hexdigest()
    
    db.add(newUser)
    db.commit()
    db.refresh(newUser)

    return newUser