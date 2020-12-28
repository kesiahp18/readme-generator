const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/md-template.js');

const promptUser = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: username => {
                if (username) {
                    return true;
                } else {
                    console.log('\nPlease enter your username');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('\nPlease enter your email');
                }
            }
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('\nPlease enter a name for your project');
                }
            },
        
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('\nPlease enter a description of your project');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project and get it running?',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('\nPlease include a description of the installation process')
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your project',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    console.log("Please include instructions to use your project");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'collab',
            message: 'Include the name/title of the contributor as well as a link their GitHub',
            validate: collab => {
                if (collab) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What commands should be run to test this application?',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log("Please include commands to test your project");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What kind of license should your project have?',
            choices: ['MIT License', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        }
    ])
};

promptUser()
.then (readmeData => {
    const pageMd = generatePage(readmeData);

    fs.writeFile('README.md', generatePage(readmeData), err => {
        if(err) throw err;
        console.log('Page created! Check out README.md in this directory to see it!');
    })
});