DROP DATABASE IF EXISTS bamazon_db;
-- Create a MqSQL Database called 'bamazon' --
create database bamazon_db;

USE bamazon_db;
-- Create a table inside of that database called 'products' --

CREATE TABLE products (
item_id INT(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT(11) NOT NULL,
PRIMARY KEY (item_id)
);
