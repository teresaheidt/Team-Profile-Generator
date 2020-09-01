// TODO: Write code to define and export the Employee class
class Employee {
   
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  const employee = new Employee();
  
  employee.printInfo();