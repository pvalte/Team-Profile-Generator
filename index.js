const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/html-template.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?",
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?",
        validate: managerIdInput => {
            if (managerIdInput) {
                return true;
            } else {
                console.log("Please enter the manager's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?",
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log("Please enter the manager's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the team manager's office number?",
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
                return true;
            } else {
                console.log("Please enter the manager's office number!");
                return false;
            }
        }
    }
]

// Function to write html file
function writeToFile(fileName, managerData) {
    const html = generateHtml(managerData);

    fs.writeFile(fileName, html, err => {
        if (err) throw new Error(err);

        console.log('HTML complete! Check out profile.html to see the output!');
    });
}


function startProfileGenerator() {
    console.log('Please build your team');
    inquirer.prompt(managerQuestions)
        .then(managerData => new Manager(managerData.managerName,managerData.managerId,managerData.managerEmail,managerData.managerOffice))


}

startProfileGenerator();










// const employee = new Employee('Dave', '10', 'dave@gmail.com');
// const manager = new Manager('Dave', '10', 'dave@gmail.com', '125');
// const engineer = new Engineer('Dave', '10', 'dave@gmail.com', 'davethecoder');
// const intern = new Intern('Dave', '10', 'dave@gmail.com', 'RRHS');

// console.log(employee);
// console.log(manager);
// console.log(engineer);
// console.log(intern);