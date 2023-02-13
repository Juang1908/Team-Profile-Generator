// imports Employee
const Employee = require('./Employee');
// This will Create Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = role;

    }
    // this provides information only for engineer as requested.
    getGithub () {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
}
// exports Engineer
module.exports = Engineer;