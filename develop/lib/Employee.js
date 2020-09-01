// TODO: Write code to define and export the Employee class
class Employee {
   
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.email = role;
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
      return this.email;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
      console.log(`Role: ${this.role}`);
    }
  }
  