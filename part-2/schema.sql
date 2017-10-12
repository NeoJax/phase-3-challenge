DROP DATABASE IF EXISTS grocerystore;
CREATE DATABASE grocerystore;

\c grocerystore;

CREATE TABLE products (
	productName VARCHAR(255) NOT NULL UNIQUE,
	price FLOAT NOT NULL,
	section VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
	orid SERIAL PRIMARY KEY,
	sid INTEGER,
	totalCost FLOAT NOT NULL
);

CREATE TABLE shoppers (
	sid SERIAL PRIMARY KEY,
  shopper VARCHAR(255) NOT NULL,
	orders INTEGER
);
