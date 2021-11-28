// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description:
  ${answers.description}

  ## Table of Contents
  - Description (#description)
  - Installation (#installation)
  - Usage (#usage)
  - Contributors (#contribution)
  - Tests (#testing)
  - Questions (#questions)

  ## Installation:
  ${answers.installation}

  ## Usage:
  ${answers.usage}

  ## Contributors:
  ${answers.contribution}

  ## Tests:
  ${answers.testing}

  ## Questions:
  ${answers.questions}
`;
}

module.exports = generateMarkdown;
