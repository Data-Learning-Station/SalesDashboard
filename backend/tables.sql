CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    surname VARCHAR(256),
    password VARCHAR(256),
    phone VARCHAR(256),
    role VARCHAR(256),
    token VARCHAR(256)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    price INTEGER
);

ALTER TABLE products 
ADD path VARCHAR(256);