const Manager = require("./develop/lib/Manager");
const Engineer = require("./develop/lib/Engineer");
const Intern = require("./develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./develop/lib/htmlRenderer");

const teamArray = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function newTeam() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'Who are you?',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'No more employees'
            ]

        }
    ]).then(userChoice => {
        switch (userChoice.member) {
            case 'Manager':
                addManager();
                break;
            
            case 'Engineer':
            addEngineer();
                break;

            case 'Intern':
            addIntern();
                break;

            case 'No more employees':
            render(team);
                break;
                
        }
    })

    function addManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What if your name?',
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'managerID'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'managerOfficeNumber'
            }
        ]).then(userChoice => {
            const manager = new manager(userChoice.managerName, userChoice.managerId, userChoice.managerEmail, userChoice.managerOfficeNumber)

            team.push(manager)

            createTeam();
        })
    }

    function addEngineer() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What if your name?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'engineerId'
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'What is your Github account?',
                name: 'engineerGithub'
            }
        ]).then(userChoice => {
            const engineer = new manager(userChoice.engineerName, userChoice.engineerId, userChoice.engineerEmail, userChoice.engineerGithub)

            team.push(engineer)

            createTeam();

        })    
    }

    function addIntern() {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What if your name?',
                    name: 'internName'
                },
                {
                    type: 'input',
                    message: 'What is your employee ID?',
                    name: 'internId'
                },
                {
                    type: 'input',
                    message: 'What is your email address?',
                    name: 'internEmail'
                },
                {
                    type: 'input',
                    message: 'What is the name of the school you attend?',
                    name: 'internSchool'
                }
                ]).then(userChoice => {
                    const intern = new intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)
        
                    team.push(intern)
        
                    createTeam();
                })
            
    }
} 

module.exports = teamArray

createTeam();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
