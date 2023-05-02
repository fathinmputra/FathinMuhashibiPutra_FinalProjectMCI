const { where } = require('sequelize')
const {user_penjual} = require('../models')
const {user_pembeli} = require('../models')

const loginPembeli = (email, password) => {
    return user_pembeli.findAll({
        where: {
            email,
            password
        }
    })
}

const loginPenjual = (email, password) => {
    return user_penjual.findAll({
        where: {
            email,
            password
        }
    })
}

module.exports= {
    loginPembeli,
    loginPenjual
}