var mysql = require("mysql");
var inquirer = require("inquirer");
var console_table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "",
    database: "Bamazon"
});

connection.connect(function(err){
    if (err) throw err;
});

var run = function() {
    // query the database for all products available for purchase
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        // once you have the products, prompt the user for which they'd like to purchase
        inquirer.prompt([
            {
                name: "select",
                type: "list",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
                message: "What would you like to do?"
            }
        ]).then(function(answer) {

            switch (answer.select) {
                case "View Products for Sale":
                    connection.query("SELECT * FROM products", function(err, results) {
                        if (err) throw err;
                        console.table(results);
                        run();
                    });
                    break;
                case "View Low Inventory":
                    connection.query("SELECT * FROM products WHERE stock_quantity < 100", function(err, results) {
                        if (err) throw err;
                        console.table(results);
                        run();
                    });
                    break;
                case "Add to Inventory":
                    
            }
        });
    });
};

run();