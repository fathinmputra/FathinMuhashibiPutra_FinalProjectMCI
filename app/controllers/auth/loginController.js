const userService = require('../../services/userService');
const jwt = require('../../../lib/jwt');

const me = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil ditemukan',
            data : user
        });
    } catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    }
}


const loginPembeli = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) throw new Error('Email dan password harus diisi' );
        const user = await userService.loginPembeli(email, password);
        const token = jwt.generateAccessToken(user, 'pembeli');
        console.log(token);
        res.status(200).send({
            status : 'success',
            message : 'Login berhasil',
            data : {
                token : token
            }
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
    
    
const loginPenjual = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) throw new Error('Email dan password harus diisi' );
        const user = await userService.loginPenjual(email, password);
        const token = jwt.generateAccessToken(user, 'penjual');
        console.log(token);
        res.status(200).send({
            status : 'success', 
            message : 'Login berhasil', 
            data : {
                token : token
            }
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

module.exports= {
    loginPembeli,
    loginPenjual,
    me
}