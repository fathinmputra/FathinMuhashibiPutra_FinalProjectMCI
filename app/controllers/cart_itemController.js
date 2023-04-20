const cart_itemService = require('../services/cart_itemService');

const getAllcart_item = async (req, res) => {
    cart_itemService.getAllcart_item()
    .then((cart_items) => {
        if(!cart_items){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data cart_item tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data cart_item berhasil ditemukan',
                data : cart_items    
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

const createcart_item= async(req, res) => {
    try {
        const {quantity, shopping_session_id, product_id} = req.body;
        console.log (quantity, shopping_session_id, product_id);
        await cart_itemService.createcart_item(quantity, shopping_session_id, product_id);
        res.status(201).send({
            status : 'success',
            message : 'Data cart_item berhasil ditambahkan',
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

const deletecart_item = async (req, res) => {
    try {
        const {id} = req.params;
        await cart_itemService.deletecart_item(id);
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

const updatecart_item = async (req, res) => {
    try {
        const {id} = req.params;
        const {quantity, shopping_session_id, product_id} = req.body;
        await cart_itemService.updatecart_item(id, quantity, shopping_session_id, product_id);
        res.status(200).send({
            status : 'success',
            message : 'Data cart_item berhasil diupdate',
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
    getAllcart_item,
    createcart_item,
    deletecart_item,
    updatecart_item
}
