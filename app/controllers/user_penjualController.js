const user_penjualService = require('../services/user_penjualService');

const getAlluser_penjual = async (req, res) => {
    user_penjualService.getAlluser_penjual()
    .then((user_penjuals) => {
        if(!user_penjuals){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data user_penjual tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user_penjual berhasil ditemukan',
                data : user_penjuals    
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

const createuser_penjual= async(req, res) => {
    try {
        const {email, user_name, password, name, phone_number} = req.body;
        console.log (email, user_name, password, name, phone_number);
        await user_penjualService.createuser_penjual(email, user_name, password, name, phone_number);
        res.status(201).send({
            status : 'success',
            message : 'Data user_penjual berhasil ditambahkan',
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

const deleteuser_penjual = async (req, res) => {
    try {
        const {id} = req.params;
        await user_penjualService.deleteuser_penjual(id);
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

const updateuser_penjual = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, user_name, password, name, phone_number} = req.body;
        await user_penjualService.updateuser_penjual(id, email, user_name, password, name, phone_number);
        res.status(200).send({
            status : 'success',
            message : 'Data user_penjual berhasil diupdate',
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
    getAlluser_penjual,
    createuser_penjual,
    deleteuser_penjual,
    updateuser_penjual
}
