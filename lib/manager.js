// importing the employee
const Employee = require('./Employee');
// Creates manager class to add in employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {

        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }
    // this provides information about manager only as requested
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole() {
        return "Manager"
    }
}
// exports manger
module.exports = Manager;