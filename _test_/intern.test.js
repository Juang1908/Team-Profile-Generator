const Intern = require("../lib/Intern");

test("get school information for the intern", () => {
    const intern = new Intern("Juan", "841636", "@icloud.com", "UT Austin");

    expect(intern.school).toBe("UT Austin");
})