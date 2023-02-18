from fastapi import Header, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import database, users
from app.database.models import User

async def verifyToken(authorization: str = Header(), db: Session = Depends(database.get_db)):

    if not authorization: 
        raise HTTPException(status_code=400, detail='Authorization not provided')
    
    token = authorization.split(' ')[0]

    print('Token: ' + token)

    user = users.findUserByToken(token, db)

    if not user:
        raise HTTPException(status_code=401, detail='Invalid token')
    
    return user

async def requireAdmin(user: User = Depends(verifyToken)):
    if user.role != 'admin': 
        raise HTTPException(status_code=400, detail='Role \'admin\' required')

    
    return user