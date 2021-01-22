// Including packages needed for this application

const inq = require('inquirer');
const gmd = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Creating an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'Enter Title of the your Project: ',
        name: 'projectName',
    },
    {
        type: 'input',
        message: "Enter your name:",
        name: 'name',
    },
    {
        type: 'input',
        message: 'Description of your project: ',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Select the main language used: ',
        choices: ['Javascript', 'HTML', 'CSS',],
        name: 'languages',
    },
    {
        type: 'input',
        message: "Any installation commands?:",
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter any tests: ',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Enter license info: ',
        choices: ['MIT', 'ISC', 'Apache', 'IBM'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter GitHub username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter email address: ',
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter GitHub repo:",
        name: 'repo',
    }
];

// Creating a function to write README file

function writeToFile(fileName, data) {

fs.writeFile(fileName, gmd(data), (err) => 
             err ? console.log(err) : console.log('Success!'));

}

// Creating a function to initialize app
function init() {

const fileName = '../README.md';

inq.prompt(questions).then((inqResponse) => writeToFile(fileName, inqResponse));

}

// Function call to initialize app
init();
