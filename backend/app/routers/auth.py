from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.users import createUser, findUserByPhone

from app.schemas import user
from app.database import database

from app import utils

router = APIRouter()

@router.post('/register', status_code=200, response_model=user.AuthResponse)
async def register(body: user.CreateUserSchema, db: Session = Depends(database.get_db)):
    user = findUserByPhone(body.phone, db)

    if (user):
        raise HTTPException(status_code=409, detail='Account already exists')
    
    if (body.password != body.passwordConfirm):
        raise HTTPException(status_code=400, detail='Passwords do not match')
    
    newUser = createUser(body, db)

    return {
        'user': {
            'id': newUser.id,
            'name': newUser.name,
            'surname': newUser.surname,
            'phone': newUser.phone,
        },
        'role': newUser.role,
        'token': newUser.token
    }

@router.post('/login', status_code=200, response_model=user.AuthResponse)
async def register(body: user.LoginUserSchema, db: Session = Depends(database.get_db)):

    user = findUserByPhone(body.phone, db)

    if (not user):
        raise HTTPException(status_code=404, detail='User with phone ' + body.phone + ' not found')
    
    if (not utils.verify_password(body.password, user.password)):
        raise HTTPException(status_code=400, detail='Incorrect Email or Password')
    
    return {
        'user': {
            'id': user.id,
            'name': user.name,
            'surname': user.surname,
            'phone': user.phone,
        },
        'role': user.role,
        'token': user.token
    }