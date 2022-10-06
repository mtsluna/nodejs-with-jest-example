const {findOneByCategory} = require("../src/service");
const db = require("../src/db");

jest.mock("../src/db");

describe('Test mock functions', () => {

    it('Should return one product without integration', async () => {

        const spy = jest.spyOn(db, 'sqlFindAllProductByCategory').mockImplementation(() => {
            return Promise.resolve([{
                name: 'Test',
                price: 999
            }, {
                name: 'Test 2',
                price: 998
            }])
        })

        const result = await findOneByCategory('Shoes');

        expect(result).toStrictEqual({
            id: undefined,
            name: 'Test',
            price: 999
        });

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith('Shoes')

    })

})