const {user_pembeli} = require('../models')

const getAlluser_pembeli = () => {
    return user_pembeli.findAll()
}

const createuser_pembeli = (email, user_name, password, name, phone_number) => {
    return user_pembeli.create({
        email, 
        user_name, 
        password, 
        name, 
        phone_number
    })
}

const deleteuser_pembeli = (id) => {
    return user_pembeli.destroy({
        where: {
            id
        }
    })
}


const updateuser_pembeli = (id, email, user_name, password, name, phone_number) => {
    return user_pembeli.update({ 
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
    getAlluser_pembeli,
    createuser_pembeli,
    deleteuser_pembeli,
    updateuser_pembeli
}