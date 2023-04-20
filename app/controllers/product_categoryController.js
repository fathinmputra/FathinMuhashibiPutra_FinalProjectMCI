const product_categoryService = require('../services/product_categoryService');

const getAllproduct_category = async (req, res) => {
    product_categoryService.getAllproduct_category()
    .then((product_categories) => {
        if(!product_categories){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data product_category tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data product_category berhasil ditemukan',
                data : product_categories   
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

const createproduct_category= async(req, res) => {
    try {
        const {name, desc} = req.body;
        console.log (name, desc);
        await product_categoryService.createproduct_category(name, desc);
        res.status(201).send({
            status : 'success',
            message : 'Data product_category berhasil ditambahkan',
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

const deleteproduct_category = async (req, res) => {
    try {
        const {id} = req.params;
        await product_categoryService.deleteproduct_category(id);
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

const updateproduct_category = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, desc} = req.body;
        await product_categoryService.updateproduct_category(id, name, desc);
        res.status(200).send({
            status : 'success',
            message : 'Data product_category berhasil diupdate',
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
    getAllproduct_category,
    createproduct_category,
    deleteproduct_category,
    updateproduct_category
}
