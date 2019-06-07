# Bamazon-MySQL

### Overview
In this assignment, I created an Amazon-like storefront using MySQL database. The application works by taking in orders from customers and deplete stock from the store's inventory. The application should prompt users with two messages.

   * What ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request. If not, the application will log a phrase `Insufficient quantity!`, and then prevent the order from going through. However, if the store _does_ have enough of the product, the customer's order will be fulfilled.

### Customer View

The products will have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.

### Technology Used

* MySQL database

* Node.js

* NPM Installs

* MySQL Workbench

* bamazonCustomer.js

* bamazonCustomer.sql
