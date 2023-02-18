from fastapi import Depends
from sqlalchemy.orm import Session
from app import utils

from app.schemas import product
from app.database import models
from app.database import database

def createProduct(body: product.CreateProductSchema, db: Session):
    newProduct = models.Product()
    newProduct.name = body.name
    newProduct.price = body.price

    db.add(newProduct)
    db.commit()
    db.refresh(newProduct)

    return newProduct

def deleteProduct(item_id: int, db: Session):
    product = db.query(models.Product).filter(models.Product.id == item_id).first()

    if not product:
        return None
    
    db.delete(product)
    db.commit()
    return product


def getProduct(item_id: int, db: Session):
    product = db.query(models.Product).filter(models.Product.id == item_id).first()
    return product

def updateProduct(id: int, body: product.CreateProductSchema, db: Session):
    product: models.Product = db.query(models.Product).filter(models.Product.id == id).first()
    if not product:
        return None
    
    product.name = body.name
    product.price = body.price

    db.commit()

    return product

def allProducts(db: Session):
    return db.query(models.Product).all()