const {shopping_session} = require('../models')

const getAllshopping_session = () => {
    return shopping_session.findAll()
}

const createshopping_session = (total, user_pembeli_id) => {
    return shopping_session.create({
        total, 
        user_pembeli_id
    })
}

const deleteshopping_session = (id) => {
    return shopping_session.destroy({
        where: {
            id
        }
    })
}


const updateshopping_session = (id, total, user_pembeli_id) => {
    return shopping_session.update({ 
        total, 
        user_pembeli_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllshopping_session,
    createshopping_session,
    deleteshopping_session,
    updateshopping_session
}