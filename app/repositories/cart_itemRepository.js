const {cart_item} = require('../models')

const getAllcart_item = () => {
    return cart_item.findAll()
}

const createcart_item = (quantity, shopping_session_id, product_id) => {
    return cart_item.create({
        quantity, 
        shopping_session_id, 
        product_id
    })
}

const deletecart_item = (id) => {
    return cart_item.destroy({
        where: {
            id
        }
    })
}


const updatecart_item = (id, quantity, shopping_session_id, product_id) => {
    return cart_item.update({ 
        quantity, 
        shopping_session_id, 
        product_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllcart_item,
    createcart_item,
    deletecart_item,
    updatecart_item
}