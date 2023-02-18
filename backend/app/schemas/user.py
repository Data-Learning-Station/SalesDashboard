from pydantic import BaseModel, constr

class CreateUserSchema(BaseModel):
    name: str
    surname: str
    phone: str
    password: constr(min_length=4)
    passwordConfirm: str
    role: str = 'user'
    verified: bool = False

class LoginUserSchema(BaseModel):
    phone: str
    password: constr(min_length=4)

class UserResponse(BaseModel):
    id: int
    name: str
    surname: str
    phone: str

class AuthResponse(BaseModel):
    user: UserResponse
    token: str
    role: str = 'user'