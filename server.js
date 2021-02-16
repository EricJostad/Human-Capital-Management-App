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
  database: 'humancapital_DB',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as id ${connection.threadId}\n`);
  firstChoice();
});

// This function will set up the first questions
function firstChoice() {

  inquirer.prompt({
    type: 'list',
    name: 'choices',
    message: 'Welcome to the HCM app! What would you like to do?',
    choices: [
      'Add a department',
      'Add a role',
      'Add an employee',
      'View departments',
      'View roles',
      'View employees',
      'Update employee roles',
      'End the application',
    ],
  }).then(function ({ choices }) {
    switch (choices) {
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'View departments':
        viewDepartments();
        break;
      case 'View roles':
        viewRoles();
        break;
      case 'View employees':
        viewEmployees();
        break;
      case 'Update employee roles':
        updateEmpRoles();
        break;
      case 'End the application':
        console.log('Goodbye.');
        break;
    }
  });
}

// // Set up listening 
// app.listen(PORT);