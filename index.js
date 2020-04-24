const inquirer = require("inquirer");
const fs = require("fs").promises;

const README = fs.writeFile;

function askQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "urlAddress",
            message: "What is the URL for your project?"
        },
        {
            type: "input",
            name: "projectName",
            message: "What is your project name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project."
        },
        {
            type: "input",
            name: "use",
            message: "What is the use for this project?"
        },
        {
            type: "input",
            name: "technologies",
            message: "What technologies does your project use?"
        },
        {
            type: "input",
            name: "commandInstall",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?"
        },
        {
            type: "input",
            name: "license",
            message: "What type of license should your project have?"
        }
    ]);
}

function generateMarkdown(responses) {
    return `# ${responses.projectName}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Project description
${responses.description}
## Table of contents
### Use
${responses.use}
### Technologies used
${responses.technologies}
### Installation
${responses.commandInstall}
### Contributing
${responses.contribute}
### License
${responses.license}
### Creator information
GitHub username: ${responses.username}\n
Email: ${responses.email}\n
Github repository: ${responses.urlAddress}
`;
}
module.exports = generateMarkdown;


async function init() {
    console.log("Hello")
    try {
        const responses = await askQuestions();

        const readme = generateMarkdown(responses);

        await README("README.md", readme);

        console.log("README created!");
    } catch (err) {
        console.log(err);
    }
}
init();