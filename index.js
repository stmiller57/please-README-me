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
            name: "license",
            message: "What type of license should your project have?"
        },
        {
            type: "input",
            name: "commandInstall",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "commandTest",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "userKnowledge",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "contribute",
            message: "What does the user need to know about contributing to the repo?"
        }
    ]);
}

function generateMarkdown(responses) {
    return `# ${responses.projectName}
  ## Project description
  ${responses.description}
  ### Nitty-gritty details
  ${responses.license}
  ${responses.commandInstall}
  ${responses.commandTest}
  ${responses.userKnowledge}
  ${responses.contribute}
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