// TODO: Write code to define and export the Employee class
class Employee {
   
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName() {
      return this.name;
    }

    getId() {
      return this.id;
    }

    getEmail() {
      return this.email;
    }

    getRole() {
      return "Employee"
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
      console.log(`Role: ${this.role}`);
    }
  }
  module.exports = Employee;