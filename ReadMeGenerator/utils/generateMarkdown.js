// Creating a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  if ('MIT'){
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if ('ISC') {
    return 'https://img.shields.io/badge/License-ISC-blue.svg';
  } else if ('Apache') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else if ('IBM') {
    return 'https://img.shields.io/badge/License-IPL%201.0-blue.svg';
  } else {
    return '';
  }

}

// Creating a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {

  if ('MIT'){
    return 'https://opensource.org/licenses/MIT';
  } else if ('ISC') {
    return 'https://opensource.org/licenses/ISC';
  } else if ('Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if ('IBM') {
    return 'https://opensource.org/licenses/IPL-1.0';
  } else {
    return '';
  }

}

// Creating a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(projectName, license) {

  const licenseURL = renderLicenseLink(license);
  
  if(licenseURL === '') {
    return '';
  } else {
    return `The license under which this application ***${projectName}*** is covered :- [${license}](${licenseURL})`
  }


}

// Creating a function to generate markdown for README

function generateMarkdown(data) {
  return  `# <b>${data.projectName}</b>

  # <b>${data.name}</b>

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Languages](#languages)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [License](#licence)
  * [Questions](#questions)
  ## Installation

  Use following commands to install dependencies:
  * ${data.installation}

  ## Languages
  ${data.languages}

  ## Tests
  * ${data.tests}

  ## Questions
  Contact me with any questions
  *  Github Name: ${data.name}
  *  [E-mail:](${data.email})
  *  [Git Repo Link:](${data.repo})

  ##License
  ${renderLicenseSection(data.projectName,data.license)}

  `;
}


module.exports = generateMarkdown;
