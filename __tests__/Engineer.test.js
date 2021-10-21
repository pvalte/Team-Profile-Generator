const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Dave', '10', 'dave@gmail.com', 'davethecoder');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('10');
    expect(engineer.email).toBe('dave@gmail.com');
    expect(engineer.github).toBe('davethecoder');
});

// getRole() // Returns 'Engineer'
test("gets Engineer's role", () => {
    const engineer = new Engineer('Dave', '10', 'dave@gmail.com', 'davethecoder');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});