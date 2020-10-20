// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.github}
  ${renderLicense(data.license)}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ##installation
  ${data.Installation}
`;
}

function renderLicense(license){
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

module.exports = generateMarkdown;
