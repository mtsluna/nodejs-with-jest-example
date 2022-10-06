const { peopleMapper, callPeople, callPeopleAsync } = require("../src/people");

describe('Test people functions', () => {

    it('Should return a map of person', () => {

        const mappedEntry = peopleMapper('Matias', 'Luna');

        expect(mappedEntry).toStrictEqual({
            name: 'Matias',
            surname: 'Luna',
            company: {
                name: 'Kavak',
            },
            position: 'Software Engineer'
        });

    })

    it('Should throw an error on call callPeople function with name Matias', () => {
        expect(() => {
            callPeople('Matias');
        }).toThrow('Matias is not allowed');
    })

    it('Should return true if the name is not Matias', () => {
        const called = callPeople('John');

        expect(called).toBe(true);
        expect(called).toBeTruthy();
    })

    it('Should throw an error on async function call people', () => {
        expect(async () => {
            await callPeopleAsync('Matias');
        }).rejects.toThrow('Matias is not allowed');
    })

    it('Should return true if the name is not Matias', async () => {
        const called = await callPeopleAsync('John');

        expect(called).toBe(true);
        expect(called).toBeTruthy();
    })

})