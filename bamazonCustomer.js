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


connection.connect(function (err) {
    if (err) throw err;

});



//This displays the items
function showItemList() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        console.log('========================= Welcome to BAMAZON!!!! =========================')

        inquirer.prompt([
            {
                name: "productId",
                type: "list",
                message: "Enter the Item ID of the product you would like to buy?",
                choices: function () {
                    var choices = [];
                    for (var i = 0; i < res.length; i++) {
                        choices.push(res[i].item_id + ": " + res[i].product_name + " $" + res[i].price)
                    }
                    return choices
                }
            },

            {
                name: "productQuant",
                type: "input",
                message: "How many units of the product would you like to buy?",
                when: function (answers) {
                    return answers.productId
                }
            }
        ]).then(function (answers) {

            var splitSelectedItem = answers.productId.split(":");
            var selectedItem = splitSelectedItem[0];
            var productQuantity = parseInt(answers.productQuant);
            var total;
            var stockQuantity;
            var newProdQuant;
            var productPrice;

            connection.query("SELECT * FROM products WHERE ?", [{ item_id: selectedItem }], function (error, res) {
                if (error) throw error;
                stockQuantity = parseInt(res[0].stock_quantity);
                newProdQuant = stockQuantity - productQuantity;
                productPrice = parseInt(res[0].price);
                total = productQuantity * productPrice;


                if (stockQuantity >= productQuantity) {
                    console.log("Successfully added to your shopping cart!");
                    connection.query(
                        "UPDATE products SET ? WHERE ?", [{ stock_quantity: newProdQuant }, { item_id: selectedItem }], function (error) {
                            if (error) throw error;
                        });
                }

                else {
                    console.log("Insufficient quantity!. Try back again later!")
                }
                purchaseMore(total);
            });
        });
    });
}
showItemList();

function purchaseMore(total) {
    inquirer.prompt([
        {
            name: "addMoreItems",
            type: "list",
            message: "Would you like to purchase something else?",
            choices: ["Yes", "No"]
        }
    ]).then(function (answers) {
        if (answers.addMoreItems === "Yes") {
            showItemList();
        }

        else {
            console.log("You're total comes to: $" + total);
        }
    });
}
