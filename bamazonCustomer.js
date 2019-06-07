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
