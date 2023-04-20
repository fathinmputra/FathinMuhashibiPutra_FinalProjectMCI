const {product} = require('../models')

const getAllproduct = () => {
    return product.findAll()
}

const createproduct = (name, desc, price, image, discount_id, product_inventory_id, product_category_id, user_penjual_id) => {
    return product.create({
        name, 
        desc, 
        price, 
        image, 
        discount_id, 
        product_inventory_id, 
        product_category_id, 
        user_penjual_id
    })
}

const deleteproduct = (id) => {
    return product.destroy({
        where: {
            id
        }
    })
}


const updateproduct = (id, name, desc, price, image, discount_id, product_inventory_id, product_category_id, user_penjual_id) => {
    return product.update({ 
        name, 
        desc, 
        price, 
        image, 
        discount_id, 
        product_inventory_id, 
        product_category_id, 
        user_penjual_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllproduct,
    createproduct,
    deleteproduct,
    updateproduct
}