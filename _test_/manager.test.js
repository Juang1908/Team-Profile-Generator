const Manager = require("../lib/Manager");

test("gets office number for manager", () => {
    const manager = new Manager("Juan", "841636", "@icloud.com", "84")

    expect(manager.officeNumber).toBe("84");
}) 