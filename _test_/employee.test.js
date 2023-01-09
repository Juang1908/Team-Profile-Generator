const Employee = require("../lib/Employee");

test("returns the name of the employee being added", () => {
    const employee = new Employee("Juan")

    expect(employee.name).toBe("Juan");
})

test("returns the employee id", () => {
    const employee = new Employee("Juan", "841636")

    expect(employee.id).toBe("841636")
});

test("returns the employee email", () => {
    const employee = new Employee("Juan", "841636", "juang1908@icloud.com")

    expect(employee.email).toBe("juang1908@icloud.com")
})