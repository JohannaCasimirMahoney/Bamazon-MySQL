var mysql = require("mysql");
var inquirer = require("inquirer");

// Initializes the connection for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    // Port number
    port: 3306,
    // Username
    user: "root",
    // Password and Username
    password: "password",
    database: "bamazon_db"
});


var query = connection.query(
    "SELECT * FROM products",
    function (err, data) {
        for (var i = 0; i < data.length; i++) {
            console.log("ID: " + data[i].id + " PRODUCT: " + data[i].name + " $" + data[i].price);
        }
        inquirer.prompt([
            {
                name: "item_id",
                message: "Enter the Item ID of the product you would like to buy."
            },
            {
                name: "quantity",
                message: "How many units of the product would you like to buy?"
            }
        ]).then(function (answers) {
            var query = connection.query(
                "SELECT * FROM products",
                {
                    id: answers.item_id
                },
                function (err, data) {
                    if (answers.quantity > data[0].stock) {
                        console.log("Insufficient Quantity!");
                        connection.end();
                    } else {
                        var query = connection.query(
                            "UPDATE products SET",
                            [
                                {
                                    stock: data[0].stock - answers.quantity,
                                    sales: data[0].sales + (data[0].price * answers.quantity)
                                },
                                {
                                    id: answers.item_id
                                }
                            ],
                            function (err, data) {
                                console.log("Thank you! Your order has been Placed. Come back again soon!");
                                connection.end();
                            }
                        );
                    }
                }
            );
        });
    }
);

