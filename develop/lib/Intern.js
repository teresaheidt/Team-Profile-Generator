// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
   
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = school;
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

    getEmail() {
        return this.school;
      }

  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
      console.log(`Email: ${this.school}`);
    }
  }
  