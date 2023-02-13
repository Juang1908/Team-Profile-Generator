// imports employee properties
const Employee = require('./Employee');
// will create intern class
class Intern extends Employee {
    constructor(name, id, email, school,role) {
        super(name, id, email);
        this.school = school;
        this.role = role;
    }
    // will provited information about intern only as requested
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"
    }
}
// will export intern
module.exports = Intern;