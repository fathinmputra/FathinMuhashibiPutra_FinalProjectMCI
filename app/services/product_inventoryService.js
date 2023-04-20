const product_inventoryRepository = require ('../repositories/product_inventoryRepository');

const getAllproduct_inventory = async () => {
    try{
        const product_inventories = await product_inventoryRepository.getAllproduct_inventory();
        return product_inventories;  
    }
    catch(err){
        return err;
    }
}

const createproduct_inventory = async (quantity) => {
    try{
        const product_inventory = await product_inventoryRepository.createproduct_inventory(quantity);
        return product_inventory;
    }
    catch(err){
        return err;
    }
}

const deleteproduct_inventory = async (id) => {
    try{
        const product_inventory = await product_inventoryRepository.deleteproduct_inventory(id);
        return product_inventory;
    }
    catch(err){
        return err;
    }
}

const updateproduct_inventory = async (id, quantity) => {  
    try{
        const product_inventory = await product_inventoryRepository.updateproduct_inventory(id, quantity);
        return product_inventory;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllproduct_inventory,
    createproduct_inventory,
    deleteproduct_inventory,
    updateproduct_inventory
}

