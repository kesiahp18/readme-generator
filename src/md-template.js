module.exports = templateData => {
    const { projectName, ...data } = templateData;
    return `# ${projectName}
## Description
${data.description}
## Table of Contents
* [Installation](github.com/${data.username}/${projectName}#installation)
* [Usage](github.com/${data.username}/${projectName}#usage)
* [License](github.com/${data.username}/${projectName}#license)
* [Contributing](github.com/${data.username}/${projectName}#contributing)
* [Tests](github.com/${data.username}/${projectName}#tests)
* [Questions](github.com/${data.username}/${projectName}#questions)
    
## Installation 
${data.installation}
## Usage
${data.usage}


## License
${data.licenses} 
## Contributing
${data.contribu}

## Tests
${data.tests}

## Questions?
If you have any questions send an email to ${data.email} to have your questions answered.
Also visit my [GitHub profile](github.com/${data.username})
`;
};