const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Dave', '10', 'dave@gmail.com', 'RRHS');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe('10');
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.school).toBe('RRHS');
});

// getSchool()
test("gets intern's school", () => {
    const intern = new Intern('Dave', '10', 'dave@gmail.com', 'RRHS');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole() // Returns 'Intern'
test("gets intern's role", () => {
    const intern = new Intern('Dave', '10', 'dave@gmail.com', 'RRHS');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});