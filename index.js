// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// const util = require('util');

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
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a description for your project.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Table of Contents'
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
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib'],
        },
        {
            type: "input",
            message: "Type any questions you have",
            name: "questions"
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
    fs.writeFile ('./README.md'), template, (error) => {
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
