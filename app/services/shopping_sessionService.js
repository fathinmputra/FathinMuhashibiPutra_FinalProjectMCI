const shopping_sessionRepository = require ('../repositories/shopping_sessionRepository');

const getAllshopping_session = async () => {
    try{
        const shopping_sessions = await shopping_sessionRepository.getAllshopping_session();
        return shopping_sessions;  
    }
    catch(err){
        return err;
    }
}

const createshopping_session = async (total, user_pembeli_id) => {
    try{
        const shopping_session = await shopping_sessionRepository.createshopping_session(total, user_pembeli_id);
        return shopping_session;
    }
    catch(err){
        return err;
    }
}

const deleteshopping_session = async (id) => {
    try{
        const shopping_session = await shopping_sessionRepository.deleteshopping_session(id);
        return shopping_session;
    }
    catch(err){
        return err;
    }
}

const updateshopping_session = async (id, total, user_pembeli_id) => {  
    try{
        const shopping_session = await shopping_sessionRepository.updateshopping_session(id, total, user_pembeli_id);
        return shopping_session;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllshopping_session,
    createshopping_session,
    deleteshopping_session,
    updateshopping_session
}

