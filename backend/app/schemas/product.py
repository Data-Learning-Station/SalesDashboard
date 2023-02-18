from typing import List
from pydantic import BaseModel, constr

class CreateProductSchema(BaseModel):
    name: str
    price: int

class UpdateProductSchema(CreateProductSchema):
    name: str
    price: int

class ProductResponse(BaseModel):
    id: int
    name: str
    price: int

class ProductCreateResponse(BaseModel):
    product: ProductResponse

class AllProductsResponse(BaseModel):
    products: List[ProductResponse]


class ProductByIdResponse(BaseModel):
    product: ProductResponse