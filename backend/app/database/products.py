from fastapi import Depends
from sqlalchemy.orm import Session

from app.schemas.product import CreateProductSchema
from app.database.models import Product

def createProduct(name, price, path, db: Session):
    product = Product()
    product.name = name
    product.price = price
    product.path = path

    db.add(product)
    db.commit()
    db.refresh(product)

    return product

def deleteProduct(item_id: int, db: Session):
    product = db.query(Product).filter(Product.id == item_id).first()

    if not product:
        return None
    
    db.delete(product)
    db.commit()
    return product


def getProduct(item_id: int, db: Session):
    product = db.query(Product).filter(Product.id == item_id).first()
    return product

def updateProduct(id: int, name, price, path, db: Session):
    product: Product = db.query(Product).filter(Product.id == id).first()
    if not product:
        return None
    
    product.name = name
    product.price = price
    product.path = path

    db.commit()

    return product

def allProducts(db: Session):
    return db.query(Product).all()