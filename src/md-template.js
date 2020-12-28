module.exports = templateData => {
    const { projectName, ...data } = templateData;
    return `# ${projectName}
## Description
${data.description}
## Table of Contents
* [Installation](https://github.com/${data.username}/${projectName}#installation)
* [Usage](https://github.com/${data.username}/${projectName}#usage)
* [License](https://github.com/${data.username}/${projectName}#license)
* [Contributing](https://github.com/${data.username}/${projectName}#contributing)
* [Tests](https://github.com/${data.username}/${projectName}#tests)
* [Questions](https://github.com/${data.username}/${projectName}#questions)
    
## Installation 
${data.installation}
## Usage
${data.usage}

## License
${data.licenses} 

## Contributing
${data.collab}

## Tests
${data.tests}

## Questions?
If you have any questions send an email to ${data.email} to have your questions answered.
Also visit my [GitHub profile](https://github.com/${data.username})
`;
};