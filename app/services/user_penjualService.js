const user_penjualRepository = require ('../repositories/user_penjualRepository');

const getAlluser_penjual = async () => {
    try{
        const user_penjuals = await user_penjualRepository.getAlluser_penjual();
        return user_penjuals;  
    }
    catch(err){
        return err;
    }
}

const createuser_penjual = async (email, user_name, password, name, phone_number) => {
    try{
        const user_penjual = await user_penjualRepository.createuser_penjual(email, user_name, password, name, phone_number);
        return user_penjual;
    }
    catch(err){
        return err;
    }
}

const deleteuser_penjual = async (id) => {
    try{
        const user_penjual = await user_penjualRepository.deleteuser_penjual(id);
        return user_penjual;
    }
    catch(err){
        return err;
    }
}

const updateuser_penjual = async (id, email, user_name, password, name, phone_number) => {  
    try{
        const user_penjual = await user_penjualRepository.updateuser_penjual(id, email, user_name, password, name, phone_number);
        return user_penjual;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAlluser_penjual,
    createuser_penjual,
    deleteuser_penjual,
    updateuser_penjual
}

