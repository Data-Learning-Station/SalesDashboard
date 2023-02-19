# Fast API

Reference [Fast API Authorization example](https://codevoweb.com/restful-api-with-python-fastapi-access-and-refresh-tokens/)

create venv
```$ python3 -m venv venv```

create .env
```lua
DATABASE_PORT=5432
POSTGRES_PASSWORD=<password>
POSTGRES_USER=<user>
POSTGRES_DB=<db>
POSTGRES_HOST=postgres
POSTGRES_HOSTNAME=127.0.0.1

CLIENT_ORIGIN=http://localhost:3000
```

install packages

``` lua
pip3 install fastapi
pip3 install "uvicorn[standard]"

pip install pydantic  
pip3 install sqlalchemy psycopg2

pip3 install "passlib[bcrypt]"
```

config.py
``` py
from pydantic import BaseSettings

class Settings(BaseSettings):
    DATABASE_PORT: int
    POSTGRES_PASSWORD: str
    POSTGRES_USER: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_HOSTNAME: str

    CLIENT_ORIGIN: str

    class Config:
        env_file = './.env'

settings = Settings()
```

create database/database.py

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from ..config import settings

SQLALCHEMY_DATABASE_URL = f"postgresql://{settings.POSTGRES_USER}:{settings.POSTGRES_PASSWORD}@{settings.POSTGRES_HOSTNAME}:{settings.DATABASE_PORT}/{settings.POSTGRES_DB}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```


Install and config alembric

```
pip3 install alembic
alembic init alembic
```

Install multipart and aiofiles for file upload

```
pip3 install python-multipart
pip3 install aiofiles
```