const discountRepository = require ('../repositories/discountRepository');

const getAlldiscount = async () => {
    try{
        const discounts = await discountRepository.getAlldiscount();
        return discounts;  
    }
    catch(err){
        return err;
    }
}

const creatediscount = async (name, desc, discount_percent, active) => {
    try{
        const discount = await discountRepository.creatediscount(name, desc, discount_percent, active);
        return discount;
    }
    catch(err){
        return err;
    }
}

const deletediscount = async (id) => {
    try{
        const discount = await discountRepository.deletediscount(id);
        return discount;
    }
    catch(err){
        return err;
    }
}

const updatediscount = async (id, name, desc, discount_percent, active) => {  
    try{
        const discount = await discountRepository.updatediscount(id, name, desc, discount_percent, active);
        return discount;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAlldiscount,
    creatediscount,
    deletediscount,
    updatediscount
}

