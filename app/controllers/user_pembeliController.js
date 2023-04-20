const user_pembeliService = require('../services/user_pembeliService');

const getAlluser_pembeli = async (req, res) => {
    user_pembeliService.getAlluser_pembeli()
    .then((user_pembelis) => {
        if(!user_pembelis){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data user_pembeli tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data user_pembeli berhasil ditemukan',
                data : user_pembelis    
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

const createuser_pembeli= async(req, res) => {
    try {
        const {email, user_name, password, name, phone_number} = req.body;
        console.log (email, user_name, password, name, phone_number);
        await user_pembeliService.createuser_pembeli(email, user_name, password, name, phone_number);
        res.status(201).send({
            status : 'success',
            message : 'Data user_pembeli berhasil ditambahkan',
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

const deleteuser_pembeli = async (req, res) => {
    try {
        const {id} = req.params;
        await user_pembeliService.deleteuser_pembeli(id);
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

const updateuser_pembeli = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, user_name, password, name, phone_number} = req.body;
        await user_pembeliService.updateuser_pembeli(id, email, user_name, password, name, phone_number);
        res.status(200).send({
            status : 'success',
            message : 'Data user_pembeli berhasil diupdate',
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
    getAlluser_pembeli,
    createuser_pembeli,
    deleteuser_pembeli,
    updateuser_pembeli
}
