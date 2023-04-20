const {user_pembeli} = require('../models')

const getAllUser_pembeli = () => {
    return user_pembeli.findAll()
}

const createUser_pembeli = (email, user_name, password, name, phone_number) => {
    return user_pembeli.create({
        email, 
        user_name, 
        password, 
        name, 
        phone_number
    })
}

const deleteUser_pembeli = (id) => {
    return user_pembeli.destroy({
        where: {
            id
        }
    })
}


const updateUser_pembeli = (id, email, user_name, password, name, phone_number) => {
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
    getAllUser_pembeli,
    createUser_pembeli,
    deleteUser_pembeli,
    updateUser_pembeli
}