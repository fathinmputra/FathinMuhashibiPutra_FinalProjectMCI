const userService = require('../../services/userService');
const jwt = require('../../../lib/jwt');
const loginPembeli = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userService.loginPembeli(email, password);
        const token = jwt.generateAccessToken(user);
        res.status(200).send({
            status : 'success',
            message : 'Login berhasil',
            data : {
                user : user,
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
        const user = await userService.loginPenjual(email, password);
        // const token = generateAccessToken(user);
        res.status(200).send({
            status : 'success',
            message : 'Login berhasil',
            data : {
                user : user,
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
    loginPenjual
}