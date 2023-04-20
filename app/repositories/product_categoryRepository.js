const {product_category} = require('../models')

const getAllproduct_category = () => {
    return product_category.findAll()
}

const createproduct_category = (name, desc) => {
    return product_category.create({
        name, 
        desc
    })
}

const deleteproduct_category = (id) => {
    return product_category.destroy({
        where: {
            id
        }
    })
}


const updateproduct_category = (id, name, desc) => {
    return product_category.update({ 
        name, 
        desc
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllproduct_category,
    createproduct_category,
    deleteproduct_category,
    updateproduct_category
}