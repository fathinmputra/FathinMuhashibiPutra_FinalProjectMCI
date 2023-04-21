const addressService = require('../services/addressService');

const getAlladdress = async (req, res) => {
    addressService.getAlladdress()
    .then((addresses) => {
        if(!addresses){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data address tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data address berhasil ditemukan',
                data : addresses    
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

const createaddress= async(req, res) => {
    try {
        const {address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id} = req.body;
        console.log (address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id);
        await addressService.createaddress(address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id);
        res.status(201).send({
            status : 'success',
            message : 'Data address berhasil ditambahkan',
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

const deleteaddress = async (req, res) => {
    try {
        const {id} = req.params;
        await addressService.deleteaddress(id);
        res.status(200).send({
            status : 'success',
            message : 'Data address berhasil dihapus',
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

const updateaddress = async (req, res) => {
    try {
        const {id} = req.params;
        const {address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id} = req.body;
        await addressService.updateaddress(id, address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id);
        res.status(200).send({
            status : 'success',
            message : 'Data address berhasil diupdate',
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
    getAlladdress,
    createaddress,
    deleteaddress,
    updateaddress
}
