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
-- Populate database with around 10 different products --

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Brake Pads", "Brakes and Traction Control", 99.00, 300),
      ("Floor Mat", "Floor Mats and Carpet Products", 1.99, 50),
      ("Wheel Nut", "Tire Repair", 89, 100),
      ("Oil Filter Wrench," "Shop and Garage Tools", 6.99, 40),
      ("Brake Caliper-Front", "Brakes and Traction Control", 65.99,30),
      ("Spark Plug", "Ignition", 7.49, 60),
      
      
      

