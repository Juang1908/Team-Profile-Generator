
// Will create class to provide properties for the next classes
class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
// information for all employees
    getName(){
        return this.name;
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

// exports Employee
    module.exports = Employee;