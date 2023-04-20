const order_itemService = require('../services/order_itemService');

const getAllorder_item = async (req, res) => {
    order_itemService.getAllorder_item()
    .then((order_items) => {
        if(!order_items){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data order_item tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data order_item berhasil ditemukan',
                data : order_items    
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

const createorder_item= async(req, res) => {
    try {
        const {quantity, product_id, order_detail_id} = req.body;
        console.log (quantity, product_id, order_detail_id);
        await order_itemService.createorder_item(quantity, product_id, order_detail_id);
        res.status(201).send({
            status : 'success',
            message : 'Data order_item berhasil ditambahkan',
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

const deleteorder_item = async (req, res) => {
    try {
        const {id} = req.params;
        await order_itemService.deleteorder_item(id);
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

const updateorder_item = async (req, res) => {
    try {
        const {id} = req.params;
        const {quantity, product_id, order_detail_id} = req.body;
        await order_itemService.updateorder_item(id, quantity, product_id, order_detail_id);
        res.status(200).send({
            status : 'success',
            message : 'Data order_item berhasil diupdate',
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
    getAllorder_item,
    createorder_item,
    deleteorder_item,
    updateorder_item
}
