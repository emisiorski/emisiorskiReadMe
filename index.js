// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your GitHub name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project',
        },
        {
            type: 'input',
            name: 'install',
            message: "Please enter requirements for installation"
        },
        {
            type: 'input',
            name: "usage",
            message: "Please enter instructions for usage"
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Please enter contributors to your project:"
        },
        {
            type: 'input',
            name: 'testing',
            message: "Please enter test information for your project:"
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose License information for your project (if there is a license)",
            choices: ['none', 'apache-2.0', 'MIT', 'Unlicense', 'Mozilla','Zlib']
        },
        {
            type: "input",
            message: "Contact info for inquiry (email address)",
            name: "email"
        }

    ]



// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        var template = generateMarkdown(answers)
    fs.writeFile ('./README.md', template, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("successfully created")
        }
    })
    })
}
    


// Function call to initialize app
init();
