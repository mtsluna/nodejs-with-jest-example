const sqlFindAllProductByCategory = (category) => {
    return Promise.resolve([{
        id: 1,
        name: 'Product 1',
        category: 'Shoes',
        price: 100
    }, {
        id: 1,
        name: 'Product 1',
        category: 'Shoes',
        price: 100
    }]);
}

module.exports = {
    sqlFindAllProductByCategory
}