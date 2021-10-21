const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '10', 'dave@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('10');
    expect(employee.email).toBe('dave@gmail.com');
});

// getName()
test("gets employee's name", () => {
    const employee = new Employee('Dave', '10', 'dave@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

// getId()
test("gets employee's id", () => {
    const employee = new Employee('Dave', '10', 'dave@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

// getEmail()
test("gets employee's email", () => {
    const employee = new Employee('Dave', '10', 'dave@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// getRole() // Returns 'Employee'
test("gets employee's role", () => {
    const employee = new Employee('Dave', '10', 'dave@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});