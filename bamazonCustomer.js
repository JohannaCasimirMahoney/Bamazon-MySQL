var mysql = require("mysql");
var inquirer = require("inquirer");

// Creating the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Port number
    port: 3360,

    // Username
    user: "root",

    // Password
    password: "password",
    database: "bamazon_db",
});

// Connnect to the mysql server and sql database
connection.connect(function (err) {
    if (err) console.log(err);
    console.log("connected as id" + connection.threadId + "\n");
});

// This function will prompt the user for what action they should take
function start() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Enter the ID of the product you would like to buy.",
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many units of the product would you like to buy?",
        }
    ]).then(function (res) {
        connection.query(
            "SELECT * FROM products",
            {
                item_id: parseInt(res.id)
            },
            function (err, pRes) {
                if (err) console.log(err);
                console.log("Product ID" + res.id);
                console.log("Amount: " + res.id);
                // If user orders too many of the same product, this message below will display
                if (parseInt(res.product) > pRes[0].stock_quantity) {
                    console.log("Insufficient Quantity!");
                    connection.end();
                }
                // This updates the database values to reduce the stock_quantity
                else {
                    connection.query(
                        "UPDATE products set?"
                        [
                        {
                            stock_quantity: pRes[0].stock_quantity - parseInt(res.product)
                        },
                        {
                            item_id: parseInt(res.id)
                        }
                        ]
                    );
                    // This will update row and display the price and remaining stock
                    connection.query(
                        "SELECT * FROM products",
                        {
                            item_id: parseInt(res.id)
                        },
                        // This is for the updated row
                        function (err, sRes) {
                            if (err) console.log(err);
                            var totalPrice = pRes[0].price * parseInt(res.product);
                            console.log("Your price is " + totalPrice);
                            console.log("Stock remaining: " + sRes[0].stock_quantity);
                        }
                    );
                    connection.end();
                };
            }
        )
    })
}


