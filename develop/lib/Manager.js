// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
   
    constructor(name, id, email, github) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
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
        return this.github;
      }

  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
      console.log(`Email: ${this.github}`);
    }
  }
  