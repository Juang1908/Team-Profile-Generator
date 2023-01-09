const Engineer = require("../lib/Engineer");


test("gets the engineer github", () => {
    const engineer = new Engineer("Juan G", "841636", "@icloud.com", "juang1908")

    expect(engineer.github).toBe("juang1908")
})