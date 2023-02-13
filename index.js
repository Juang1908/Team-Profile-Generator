// Imports all files to generate a teamm
const inquirer = require('inquirer');
const fs = require('fs');
const createTeamPage = require('./lib/teamPageGenerator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// team array
const team = []
// to create a Manager
async function buildManager() {
    const managerObject = await inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the Manager's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('A manager is required!')
            }

        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the Manager's id number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide an ID Number')
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager's email?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide an Email Address!')
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide an office number!')
            }
        }
    ])
    const {managerName, managerId, managerEmail, officeNumber} = managerObject;
    const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
    team.push(manager)

    nextEmployee();
}
// to create new emplyee depending on response IF Engineer, Intern, else Manager
async function nextEmployee() {
    const newEmployee = await inquirer.prompt ([
        {
            type: 'checkbox',
            name: 'employeeType',
            message: 'Would you like to add another team member?',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish Team'],
        }
    ])
    const {employeeType} = newEmployee

    if(employeeType[0] === 'Engineer') {
        buildEngineer()
    } else if (employeeType[0] === 'Intern') {
        buildIntern()
    } else if (employeeType[0] === 'Manager') {
        buildManager()
    } else {
        finishTeam()
    }
}
// Createa the Engineer 
async function buildEngineer() {
    const engineerObject = await inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the Engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('An engineer is required!')
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the Engineer's id number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide an ID Number')
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the Engineer's email?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide an Email Address!')
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the Engineer's github?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide a github Username!')
            }
        }
    ])
    const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerObject
    const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
    team.push(engineer);

    nextEmployee();
}
// Created an Intern
async function buildIntern() {
    const internObject = await inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the Intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('An intern is required!')
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the Intern's id number?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide an ID')
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the Intern's email?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Provide an email!')
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the Intern's schooling?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                console.log('Include schooling information!')
            }
        }
    ])
    const {internName, internId, internEmail, internSchool} = internObject
    const intern = new Intern(internName, internId, internEmail, internSchool)
    
    team.push(intern);

    nextEmployee();
}

async function buildTeam() {
    await buildManager()
}

function finishTeam() {
    const createTeamHtml = createTeamPage(team);
    const fileName = 'buildMyTeam'

    writeFile(fileName, createTeamHtml);

}
// Writes file and generates
function writeFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}.html`, data, (err) => {
        if(err){
            console.log(err);
        }
        console.log('Your team page has been Generated!');
    });
}

buildTeam();