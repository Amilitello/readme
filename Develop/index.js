// array of questions for user

const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [ {
    type: "input", 
    message: "What is your github username?",
    name: "github"
},
{
    type: "list",
    message: "What would you like your license to be?",
    name: "license",
    choices: ["MIT", "BSD3", "APACHE2.0"]
},
{
    type: "input",
    message: "How do you install dependancies for this project?",
    name: "Installation"
},
{
    type: "input",
    message: "What does client need to know about using the repo?",
    name: "Usage"
},
{
    type: "input",
    message: "How do we want the client to contribue?",
    name: "Contribution"
},
{
    type: "input",
    message: "What command should be used to run tests?",
    name: "TestInstructions"
}


];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile("newreadme.md", generateMarkdown(data))
    })
}

// function call to initialize program
init();
