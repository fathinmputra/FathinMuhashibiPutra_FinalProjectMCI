const addressRepository = require ('../repositories/addressRepository');

const getAlladdress = async () => {
    try{
        const addresses = await addressRepository.getAlladdress();
        return addresses;  
    }
    catch(err){
        return err;
    }
}

const createaddress = async (address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id) => {
    try{
        const address = await addressRepository.createaddress(address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id);
        return address;
    }
    catch(err){
        return err;
    }
}

const deleteaddress = async (id) => {
    try{
        const address = await addressRepository.deleteaddress(id);
        return address;
    }
    catch(err){
        return err;
    }
}

const updateaddress = async (id, address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id) => {  
    try{
        const address = await addressRepository.updateaddress(id, address_line1, address_line2, city, postal_code, country, phone_number, user_pembeli_id);
        return address;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAlladdress,
    createaddress,
    deleteaddress,
    updateaddress
}

