const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/html-template.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//array to hold all employees added to team
const team = [];

//prompts for each employee type
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
        name: 'office',
        message: "What is the team manager's office number?",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please enter the manager's office number!");
                return false;
            }
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's id?",
        validate: engineerIdInput => {
            if (engineerIdInput) {
                return true;
            } else {
                console.log("Please enter the engineer's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log("Please enter the engineer's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineers's GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub!");
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        validate: internNameInput => {
            if (internNameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's id?",
        validate: internIdInput => {
            if (internIdInput) {
                return true;
            } else {
                console.log("Please enter the intern's id!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the team intern's email?",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("Please enter the intern's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }
    }
]

// Function to write html file
function writeToFile(fileName, team) {
    const html = generateHtml(team);

    fs.writeFile(fileName, html, err => {
        if (err) throw new Error(err);

        console.log('HTML complete! Check out profile.html to see the output!');
    });
}

function addToTeam() {
    inquirer
        .prompt({
            type: 'list',
            message: 'What type of team member would you like to add?',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'Finished building my team']
        })
        // Prompt intern or engineer questions
        .then(({ employeeType }) => {
            if (employeeType === 'Finished building my team') {
                //write html and conclude prompts
                writeToFile('./dist/profile.html', team);
                return;
            }
            else if (employeeType === 'Engineer') {
                //prompt engineer questions
                inquirer
                    .prompt(engineerQuestions)
                    .then(answers => {
                        //add engineer to team array
                        team.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github))
                        
                        //prompt to add another team member
                        addToTeam();
                    })
            }
            else {
                //prompt intern questions
                inquirer
                    .prompt(internQuestions)
                    .then(answers => {
                        //add intern to team array
                        team.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.school))
                        
                        //prompt to add another team member
                        addToTeam();
                    })
            }
        })
}

function init() {
    console.log('Please build your team');
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            team.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office))
            addToTeam();
        })
}

init();