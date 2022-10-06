const {sqlFindAllProductByCategory} = require("./db");

const findOneByCategory = async (category) => {

    const products = await sqlFindAllProductByCategory(category);

    return {
        ...products[0],
        id: undefined
    }

}

module.exports = {
    findOneByCategory
}