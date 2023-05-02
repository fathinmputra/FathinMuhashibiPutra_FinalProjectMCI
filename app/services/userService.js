const userRepository = require('../repositories/userRepository');

const loginPembeli = async (email, password) => {
    try {
        const user = await userRepository.loginPembeli(email, password);
        return user;
    }
    catch(err) {
        return err;
    }
}

const loginPenjual = async (email, password) => {
    try {
        const user = await userRepository.loginPenjual(email, password);
        return user;
    }
    catch(err) {
        return err;
    }
}

module.exports= {
    loginPembeli,
    loginPenjual
}

