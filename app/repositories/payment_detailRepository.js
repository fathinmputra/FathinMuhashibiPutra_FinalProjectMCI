const {payment_detail} = require('../models')

const getAllpayment_detail = () => {
    return payment_detail.findAll()
}

const createpayment_detail = (amount, provider, account_name, status, payment_proof) => {
    return payment_detail.create({
        amount, 
        provider,
        account_name, 
        status, 
        payment_proof
    })
}

const deletepayment_detail = (id) => {
    return payment_detail.destroy({
        where: {
            id
        }
    })
}


const updatepayment_detail = (id, amount, provider, account_name, status, payment_proof) => {
    return payment_detail.update({ 
        amount, 
        provider,
        account_name, 
        status, 
        payment_proof
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllpayment_detail,
    createpayment_detail,
    deletepayment_detail,
    updatepayment_detail
}