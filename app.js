const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];

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
    ]).then(answer => {
        switch (answer.memberChoice) {
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
            createTeam()
                break;
                
        }
    })

    function addManager() {
        inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'managerId'
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
            const manager = new Manager(userChoice.managerName, userChoice.managerId, userChoice.managerEmail, userChoice.managerOfficeNumber)

            teamArray.push(manager)

           newTeam()
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
            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerId, userChoice.engineerEmail, userChoice.engineerGithub)

            teamArray.push(engineer)

            newTeam();

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
                    const intern = new Intern(userChoice.internName, userChoice.internId, userChoice.internEmail, userChoice.internSchool)
        
                    teamArray.push(intern)
        
                    newTeam();
                })
            
    }
} 
function createTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}


// Require/import the HTTP module
const http = require("http");

// Define a port to listen for incoming requests
const PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


newTeam();

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
