const { calculateArea } = require('../src/triangle');

describe('Test triangle functions', () => {

    it('Should return the correct area of a triangle', () => {
        const area = calculateArea(2, 3);
        expect(area).toBe(3);
    });

    it('Should return a number', () => {
        const area = calculateArea(2, 3);
        expect(typeof area).toBe('number');
    });

})