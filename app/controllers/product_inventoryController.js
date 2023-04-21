const product_inventoryService = require('../services/product_inventoryService');

const getAllproduct_inventory = async (req, res) => {
    product_inventoryService.getAllproduct_inventory()
    .then((product_inventories) => {
        if(!product_inventories){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data product_inventory tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data product_inventory berhasil ditemukan',
                data : product_inventories   
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

const createproduct_inventory= async(req, res) => {
    try {
        const {quantity} = req.body;
        console.log (quantity);
        await product_inventoryService.createproduct_inventory(quantity);
        res.status(201).send({
            status : 'success',
            message : 'Data product_inventory berhasil ditambahkan',
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

const deleteproduct_inventory = async (req, res) => {
    try {
        const {id} = req.params;
        await product_inventoryService.deleteproduct_inventory(id);
        res.status(200).send({
            status : 'success',
            message : 'Data product_inventory berhasil dihapus',
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

const updateproduct_inventory = async (req, res) => {
    try {
        const {id} = req.params;
        const {quantity} = req.body;
        await product_inventoryService.updateproduct_inventory(id, quantity);
        res.status(200).send({
            status : 'success',
            message : 'Data product_inventory berhasil diupdate',
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
    getAllproduct_inventory,
    createproduct_inventory,
    deleteproduct_inventory,
    updateproduct_inventory
}
