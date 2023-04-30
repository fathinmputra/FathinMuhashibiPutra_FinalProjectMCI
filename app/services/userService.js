const userRepository = require('../repositories/userRepository');

const loginPembeli = async (email, password) => {
    try {
        const user = await userRepository.loginUser(email, password);
        return user;
    }
    catch(err) {
        return err;
    }
}

const loginPenjual = async (email, password) => {
    try {
        const user = await userRepository.loginUser(email, password);
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

