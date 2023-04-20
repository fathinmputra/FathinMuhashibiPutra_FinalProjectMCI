const productService = require('../services/productService');

const getAllproduct = async (req, res) => {
    productService.getAllproduct()
    .then((products) => {
        if(!products){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data product tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data product berhasil ditemukan',
                data : products    
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

const createproduct= async(req, res) => {
    try {
        const {quantity, shopping_session_id, product_id} = req.body;
        console.log (quantity, shopping_session_id, product_id);
        await productService.createproduct(quantity, shopping_session_id, product_id);
        res.status(201).send({
            status : 'success',
            message : 'Data product berhasil ditambahkan',
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

const deleteproduct = async (req, res) => {
    try {
        const {id} = req.params;
        await productService.deleteproduct(id);
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

const updateproduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {quantity, shopping_session_id, product_id} = req.body;
        await productService.updateproduct(id, quantity, shopping_session_id, product_id);
        res.status(200).send({
            status : 'success',
            message : 'Data product berhasil diupdate',
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
    getAllproduct,
    createproduct,
    deleteproduct,
    updateproduct
}
