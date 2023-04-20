const {user_penjual} = require('../models')

const getAlluser_penjual = () => {
    return user_penjual.findAll()
}

const createuser_penjual = (email, user_name, password, name, phone_number) => {
    return user_penjual.create({
        email, 
        user_name, 
        password, 
        name, 
        phone_number
    })
}

const deleteuser_penjual = (id) => {
    return user_penjual.destroy({
        where: {
            id
        }
    })
}


const updateuser_penjual = (id, email, user_name, password, name, phone_number) => {
    return user_penjual.update({ 
        email, 
        user_name, 
        password, 
        name, 
        phone_number
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAlluser_penjual,
    createuser_penjual,
    deleteuser_penjual,
    updateuser_penjual
}