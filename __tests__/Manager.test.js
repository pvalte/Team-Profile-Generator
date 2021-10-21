const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Dave', '10', 'dave@gmail.com', '125');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('10');
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toBe('125');
});

// getRole() // Returns 'Manager'
test("gets manager's role", () => {
    const manager = new Manager('Dave', '10', 'dave@gmail.com', '125');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});