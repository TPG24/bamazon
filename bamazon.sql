DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price INT NOT NULL,
stock_quanity INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Computer", "Electronics", 300, 5);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("iPad", "Electronics", 200, 15);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Washer", "Appliances", 500, 7);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Dryer", "Appliances", 500, 7);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("iPhone", "Phone", 600, 20);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Bike", "Outdoors", 150, 19);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Boots", "Shoes", 50, 50);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Sneakers", "Shoes", 30, 70)

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Mountain Dew (12pk)", "Drinks", 5, 200);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Bookbag", "Bags", 40, 90);
