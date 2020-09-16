// code to define and export intern class
const Employee = require('./Employee');
// inherits from the  Employee class
class Intern extends Employee {

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern"
  }
}

module.exports = Intern;
