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