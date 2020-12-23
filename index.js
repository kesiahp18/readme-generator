const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your projects name?',
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
        }
    ])
};

promptUser();