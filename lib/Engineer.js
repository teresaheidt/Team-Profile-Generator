// code to define and export engineer class
const Employee = require('./Employee');
// inherits from the  Employee class
class Engineer extends Employee {

  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer"
  }

}

module.exports = Engineer