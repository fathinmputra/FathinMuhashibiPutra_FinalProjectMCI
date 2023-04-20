const {address} = require('../models')

const getAlladdress = () => {
    return address.findAll()
}

const createaddress = (address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id) => {
    return address.create({
        address_line1, 
        address_line2, 
        city, 
        postal_code, 
        country, 
        phone_number, 
        user_pembeli_id
    })
}

const deleteaddress = (id) => {
    return address.destroy({
        where: {
            id
        }
    })
}


const updateaddress = (id, address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id) => {
    return address.update({ 
        address_line1, 
        address_line2, 
        city, 
        postal_code, 
        country, 
        phone_number, 
        user_pembeli_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAlladdress,
    createaddress,
    deleteaddress,
    updateaddress
}