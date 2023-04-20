const {discount} = require('../models')

const getAlldiscount = () => {
    return discount.findAll()
}

const creatediscount = (name, desc, discount_percent, active) => {
    return discount.create({
        name, 
        desc, 
        discount_percent, 
        active
    })
}

const deletediscount = (id) => {
    return discount.destroy({
        where: {
            id
        }
    })
}


const updatediscount = (id, name, desc, discount_percent, active) => {
    return discount.update({ 
        name, 
        desc, 
        discount_percent, 
        active
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAlldiscount,
    creatediscount,
    deletediscount,
    updatediscount
}