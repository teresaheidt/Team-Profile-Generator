const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const teamArray = []

function managerQuestions() {

    inquirer
        .prompt([

            {
                type: 'input',
                name: 'nameChoice',
                message: 'Who are you?',
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more employees"
                ]     
        }
            
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Manager":
                    addManager();
                    break;

                    case "engineer":
                        addEngineer();
                        break;

                        case "Intern":
                            addIntern();
                            break;

                            case "No more employes":
                                render(teamArray);
                                break
            }
        })

        function addManager() {

            inquirer
                .prompt([
    
                    {
                        type: "input",
                        message: "Manager first name?",
                        name: "managerName"
                    },
    
                    {
                        type: "input",
                        message: "Manager ID?",
                        name: "managerID"
                    },
    
                    {
                        type: "input",
                        message: "Manager email?",
                        name: "managerEmail"
                    },
    
                    {
                        type: "input",
                        message: "Manager telephone number?",
                        name: "managerOfficeNumber"
                    }
    
                ]).then(userChoice => {
                    console.log(userChoice);
    
                    const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)
    
                    teamMembers.push(manager)
    
                    createTeam();
    
                })
        }

        function addEngineer() {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'First name?',
                    name: 'engineerName',
                },
                {
                    type: 'input',
                    message: 'What is your ID?',
                    name: 'engineerId',
                },
                {
                    type: 'input',
                    message: 'What is your email address?',
                    name: 'engineerEmail' 
                },
                {
                    type: 'input',
                    message: 'What is your Github link?',
                    name: 'engineerGithub',
                }
            ]).then(userChoice => {
                console.log(userChoice);

                const engineer = new Engineer(userChoice.engineerName, userChoice.engineerId, userChoice.engineerEmail, userChoice.engineerGithub)

            teamArray.push(engineer)
            
            createTeam();

            })

        }


        function addIntern() {
            inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your first name?',
                    name: 'internName',
                },
                {
                    type: 'input',
                    message: 'What is your ID?',
                    name: 'internId',
                },
                {
                    type: 'input',
                    message: 'What is your email address?',
                    name: 'internEmail' 
                },
                {
                    type: 'input',
                    message: 'What school do you attend?',
                    name: 'internSchool',
                }
            ]).then(userChoice => {
                console.log(userChoice);

                const intern = new Intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)

            teamArray.push(intern)
            
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
