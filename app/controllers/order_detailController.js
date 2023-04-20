const order_detailService = require('../services/order_detailService');

const getAllorder_detail = async (req, res) => {
    order_detailService.getAllorder_detail()
    .then((order_details) => {
        if(!order_details){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data order_detail tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data order_detail berhasil ditemukan',
                data : order_details    
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

const createorder_detail= async(req, res) => {
    try {
        const {total, payment_detail_id, user_pembeli_id} = req.body;
        console.log (total, payment_detail_id, user_pembeli_id);
        await order_detailService.createorder_detail(total, payment_detail_id, user_pembeli_id);
        res.status(201).send({
            status : 'success',
            message : 'Data order_detail berhasil ditambahkan',
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

const deleteorder_detail = async (req, res) => {
    try {
        const {id} = req.params;
        await order_detailService.deleteorder_detail(id);
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

const updateorder_detail = async (req, res) => {
    try {
        const {id} = req.params;
        const {total, payment_detail_id, user_pembeli_id} = req.body;
        await order_detailService.updateorder_detail(id, total, payment_detail_id, user_pembeli_id);
        res.status(200).send({
            status : 'success',
            message : 'Data order_detail berhasil diupdate',
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
    getAllorder_detail,
    createorder_detail,
    deleteorder_detail,
    updateorder_detail
}
