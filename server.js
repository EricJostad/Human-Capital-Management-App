// Setting up dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// const app = express();

// Setting up Port
const PORT = process.env.PORT || 1170;

// Setting up connection to the DB
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'departments_DB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    initialChoice();
  });

// Set up listening 
  app.listen(PORT);