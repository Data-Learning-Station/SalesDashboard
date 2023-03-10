from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.middlewares.auth import verifyToken
from app.database.models import User

from app.routers import auth
from app.routers import products

app = FastAPI()

origins = [ "*" ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.include_router(auth.router, tags=['Auth'], prefix='/api/auth')

app.include_router(products.router, tags=['Products'], prefix='/api/products')

@app.get('/api/check', status_code=200)
def check(user: User = Depends(verifyToken)):
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

@app.get('/api/healthchecker', status_code=200)
def root():
    return "Success"