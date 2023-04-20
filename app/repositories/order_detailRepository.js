const {order_detail} = require('../models')

const getAllorder_detail = () => {
    return order_detail.findAll()
}

const createorder_detail = (total, payment_detail_id, user_pembeli_id) => {
    return order_detail.create({
        total, 
        payment_detail_id, 
        user_pembeli_id
    })
}

const deleteorder_detail = (id) => {
    return order_detail.destroy({
        where: {
            id
        }
    })
}


const updateorder_detail = (id, total, payment_detail_id, user_pembeli_id) => {
    return order_detail.update({ 
        total, 
        payment_detail_id, 
        user_pembeli_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllorder_detail,
    createorder_detail,
    deleteorder_detail,
    updateorder_detail
}