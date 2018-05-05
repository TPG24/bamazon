const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID" + connection.threadId);

    start();
});

function start(){
    connection.query("SELECT * FROM products", function(error, response){
        if (error) {
            throw error
        }
        for (let i = 0; i < response.length; i++){
            console.log("======================");
            console.log("Item ID: " + response[i].item_id);
            console.log("Product Name: " + response[i].product_name);
            console.log("Product Price: $" + response[i].price);
            console.log("======================");
        }
        customerPrompt();
    });
}

function customerPrompt(){
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What item would you like to purchase?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How much would you like to purchase?"
        },
    ]).then(function(answer){
        connection.query("SELECT * FROM products WHERE ?", {item_id: answer.id}, function(error, response) {
            console.log(answer.id);
            if (error) {
                throw error
            }

        answer.id = response[0].item_id;
        for (let i = 0; i < response.length; i++) {
            let updatedAmount = response[i].stock_quantity - answer.quantity;

            if (answer.quantity <= response[i].stock_quantity) {
                order(answer.id, updatedAmount);
                total(answer.quantity, response[i].price);
            } else {
                console.log("Insufficient amount of that item!!!")
            }

        }


        });
    });
}

function order(id, quantity){
    connection.query("UPDATE products SET ? WHERE ?",
        [
            {
                item_id: id
            },
            {
                stock_quantity: quantity
            }
        ],
        function(error, response){
            if(error){
                throw error;
            }
            console.log(response);
            console.log("Thank you for your purchase!");
        }
    );
    connection.end();
}

function total(quantity, price){
    let totalCost = quantity * price;
    console.log("Your total will be: " + totalCost);
}