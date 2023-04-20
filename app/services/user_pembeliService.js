const user_pembeliRepository = require ('../repositories/user_pembeliRepository');

const getAlluser_pembeli = async () => {
    try{
        const user_pembelis = await user_pembeliRepository.getAlluser_pembeli();
        return user_pembelis;  
    }
    catch(err){
        return err;
    }
}

const createuser_pembeli = async (email, user_name, password, name, phone_number) => {
    try{
        const user_pembeli = await user_pembeliRepository.createuser_pembeli(email, user_name, password, name, phone_number);
        return user_pembeli;
    }
    catch(err){
        return err;
    }
}

const deleteuser_pembeli = async (id) => {
    try{
        const user_pembeli = await user_pembeliRepository.deleteuser_pembeli(id);
        return user_pembeli;
    }
    catch(err){
        return err;
    }
}

const updateuser_pembeli = async (id, email, user_name, password, name, phone_number) => {  
    try{
        const user_pembeli = await user_pembeliRepository.updateuser_pembeli(id, email, user_name, password, name, phone_number);
        return user_pembeli;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAlluser_pembeli,
    createuser_pembeli,
    deleteuser_pembeli,
    updateuser_pembeli
}

