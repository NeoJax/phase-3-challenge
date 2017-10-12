DROP DATABASE IF EXISTS grocerystore;
CREATE DATABASE grocerystore;

\c grocerystore;

CREATE TABLE products (
	prid SERIAL PRIMARY KEY,
	productName VARCHAR(255) NOT NULL UNIQUE,
	price INTEGER NOT NULL,
	section VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
	orid SERIAL PRIMARY KEY,
	sid INTEGER,
	totalCost INTEGER NOT NULL
);

CREATE TABLE shoppers (
	sid SERIAL PRIMARY KEY,
  shopper VARCHAR(255) NOT NULL
);
