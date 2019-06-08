# Bamazon-MySQL

### Overview
In this assignment, I created an Amazon-like storefront using MySQL database. The application works by taking in orders from customers and deplete stock from the store's inventory. The application should prompt users with two messages.

   * What ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request. If not, the application will log a phrase `Insufficient quantity!`, and then prevent the order from going through. However, if the store _does_ have enough of the product, the customer's order will be fulfilled. Once the order is fulfilled. The customer will see the total cost of their purchase.

### <a href="https://youtu.be/1BosxUgn2xE">Play Bamazon-MySQL Demo</a>

### Customer View

The products will have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)



### Technology Used

* MySQL database

* Node.js

* NPM Installs

* <a href="https://devhints.io/mysql">MySQL Workbench</a>

* bamazonCustomer.js

* bamazonCustomer.sql

* <a href="https://devhints.io/mysql">MySQL cheatsheet</a>


### How to Install Bamazon for Customer View

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.




