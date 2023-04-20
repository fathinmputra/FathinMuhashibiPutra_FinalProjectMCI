const {order_item} = require('../models')

const getAllorder_item = () => {
    return order_item.findAll()
}

const createorder_item = (quantity, product_id, order_detail_id) => {
    return order_item.create({
        quantity, 
        product_id, 
        order_detail_id
    })
}

const deleteorder_item = (id) => {
    return order_item.destroy({
        where: {
            id
        }
    })
}


const updateorder_item = (id, quantity, product_id, order_detail_id) => {
    return order_item.update({ 
        quantity, 
        product_id, 
        order_detail_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllorder_item,
    createorder_item,
    deleteorder_item,
    updateorder_item
}