const shopping_sessionService = require('../services/shopping_sessionService');

const getAllshopping_session = async (req, res) => {
    shopping_sessionService.getAllshopping_session()
    .then((shopping_sessions) => {
        if(!shopping_sessions){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data shopping_session tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data shopping_session berhasil ditemukan',
                data : shopping_sessions    
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

const createshopping_session= async(req, res) => {
    try {
        const {total, user_pembeli_id} = req.body;
        console.log (total, user_pembeli_id);
        await shopping_sessionService.createshopping_session(total, user_pembeli_id);
        res.status(201).send({
            status : 'success',
            message : 'Data shopping_session berhasil ditambahkan',
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

const deleteshopping_session = async (req, res) => {
    try {
        const {id} = req.params;
        await shopping_sessionService.deleteshopping_session(id);
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

const updateshopping_session = async (req, res) => {
    try {
        const {id} = req.params;
        const {total, user_pembeli_id} = req.body;
        await shopping_sessionService.updateshopping_session(id, total, user_pembeli_id);
        res.status(200).send({
            status : 'success',
            message : 'Data shopping_session berhasil diupdate',
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
    getAllshopping_session,
    createshopping_session,
    deleteshopping_session,
    updateshopping_session
}
