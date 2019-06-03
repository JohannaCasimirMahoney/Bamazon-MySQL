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

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

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
    ])
}
