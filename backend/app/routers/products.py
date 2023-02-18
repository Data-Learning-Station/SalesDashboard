from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.products import createProduct, deleteProduct, allProducts

from app.schemas import product
from app.database import database, models, products

from app.middlewares.auth import requireAdmin

router = APIRouter()

def _mapProduct(product: models.Product):
    return { 
        'id': product.id, 
        'name': product.name, 
        'price': product.price 
    }

@router.get('/', status_code=200, response_model=product.AllProductsResponse)
def allProducts(db: Session = Depends(database.get_db)):
    items = products.allProducts(db)
    return {
        'products': list(map(_mapProduct, items))
    }


@router.get('/{item_id}', status_code=200, response_model=product.ProductByIdResponse)
def getProduct(item_id: int, db: Session = Depends(database.get_db)):
    print(item_id)
    product = products.getProduct(item_id, db)

    if not product:
        raise HTTPException(status_code=404, detail=f"product {item_id} not found")

    return {
        'product': _mapProduct(product)
    }


@router.post('/', status_code=200, response_model=product.ProductCreateResponse)
def createProduct(body: product.CreateProductSchema, admin: models.User = Depends(requireAdmin), db: Session = Depends(database.get_db)):

    newProduct = products.createProduct(body, db)

    return {
        'product': _mapProduct(newProduct)
    }

@router.delete('/{item_id}', status_code=200, response_model=product.ProductCreateResponse)
def deleteProduct(item_id: int, admin: models.User = Depends(requireAdmin), db: Session = Depends(database.get_db)):

    deletedProduct = products.deleteProduct(item_id, db)

    if not deletedProduct: 
        raise HTTPException(status_code=404, detail=f"Product by id {item_id} not found")
    
    return {
        'product': _mapProduct(deletedProduct)
    }

@router.put('/{item_id}', status_code=200, response_model=product.ProductCreateResponse)
def createProduct(item_id: int, body: product.CreateProductSchema, admin: models.User = Depends(requireAdmin), db: Session = Depends(database.get_db)):

    newProduct = products.updateProduct(item_id, body, db)

    if not newProduct: 
        raise HTTPException(status_code=404, detail=f"Product by id {item_id} not found")
    
    return {
        'product': _mapProduct(newProduct)
    }