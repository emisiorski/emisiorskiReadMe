// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'github name',
            message: 'What is your GitHub name?'
        },
        {
            type: 'input',
            name: 'Project Title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a description for your project',
        },
        {
            type: 'input',
            name: 'Install',
            message: "Enter installation instructions as a comma separated list:"
        },
        {
            type: 'input',
            name: "usage",
            message: "Enter usage information for your project:"
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Enter contributors to your project:"
        },
        {
            type: 'input',
            name: 'testing',
            message: "Enter test information for your project:"
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
