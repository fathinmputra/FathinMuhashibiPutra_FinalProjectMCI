const discountService = require('../services/discountService');

const getAlldiscount = async (req, res) => {
    discountService.getAlldiscount()
    .then((discounts) => {
        if(!discounts){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data discount tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data discount berhasil ditemukan',
                data : discounts    
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

const creatediscount= async(req, res) => {
    try {
        const {name, desc, discount_percent, active} = req.body;
        console.log (name, desc, discount_percent, active);
        await discountService.creatediscount(name, desc, discount_percent, active);
        res.status(201).send({
            status : 'success',
            message : 'Data discount berhasil ditambahkan',
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

const deletediscount = async (req, res) => {
    try {
        const {id} = req.params;
        await discountService.deletediscount(id);
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

const updatediscount = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, desc, discount_percent, active} = req.body;
        await discountService.updatediscount(id, name, desc, discount_percent, active);
        res.status(200).send({
            status : 'success',
            message : 'Data discount berhasil diupdate',
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
    getAlldiscount,
    creatediscount,
    deletediscount,
    updatediscount
}
