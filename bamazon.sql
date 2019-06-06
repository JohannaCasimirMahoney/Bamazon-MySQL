DROP DATABASE IF EXISTS bamazon_db;
-- Create a MqSQL Database called 'bamazon' --

create database bamazon_db;

USE bamazon_db;

-- Create a table inside of that database called 'products' --
CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(11) NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products;

-- created rows that shows the database with around 10 different products --

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brake Pads", "Brakes and Traction Control", 99.99, 300),
      ("Floor Mat", "Floor Mats and Carpet Products", 24.99, 50),
      ("Wheel Nut", "Tire Repair", 89.99, 100),
      ("Oil Filter Wrench", "Shop and Garage Tools", 6.99, 40),
      ("Brake Caliper-Front", "Brakes and Traction Control", 65.99,30),
      ("Spark Plug", "Ignition", 7.49, 60),
      ("Alternator", "Starter and Alternator", 176.99, 45),
      ("Trailer Hitch","Truck and Towing", 157.99, 100),
      ("Gear Shift Knob", "Interior Accessories", 36.99, 25),
      ("Battery", "Ignition Up and Routine Maintenance", 199.99, 200);

