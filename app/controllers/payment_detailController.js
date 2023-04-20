const payment_detailService = require('../services/payment_detailService');

const getAllpayment_detail = async (req, res) => {
    payment_detailService.getAllpayment_detail()
    .then((payment_details) => {
        if(!payment_details){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data payment_detail tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data payment_detail berhasil ditemukan',
                data : payment_details    
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const createpayment_detail= async(req, res) => {
    try {
        const {amount, provider, account_name, status, payment_proof} = req.body;
        console.log (amount, provider, account_name, status, payment_proof);
        await payment_detailService.createpayment_detail(amount, provider, account_name, status, payment_proof);
        res.status(201).send({
            status : 'success',
            message : 'Data payment_detail berhasil ditambahkan',
            data : ''
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    }
}

const deletepayment_detail = async (req, res) => {
    try {
        const {id} = req.params;
        await payment_detailService.deletepayment_detail(id);
        res.status(200).send({
            status : 'success',
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        }); 
    }
}

const updatepayment_detail = async (req, res) => {
    try {
        const {id} = req.params;
        const {amount, provider, account_name, status, payment_proof} = req.body;
        await payment_detailService.updatepayment_detail(id, amount, provider, account_name, status, payment_proof);
        res.status(200).send({
            status : 'success',
            message : 'Data payment_detail berhasil diupdate',
            data : ''
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    }
}

module.exports = { 
    getAllpayment_detail,
    createpayment_detail,
    deletepayment_detail,
    updatepayment_detail
}
