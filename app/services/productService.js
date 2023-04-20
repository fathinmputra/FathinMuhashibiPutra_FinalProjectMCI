const productRepository = require ('../repositories/productRepository');

const getAllproduct = async () => {
    try{
        const products = await productRepository.getAllproduct();
        return products;  
    }
    catch(err){
        return err;
    }
}

const createproduct = async (name, desc, price, image, discount_id, product_inventory_id, product_category_id, user_penjual_id) => {
    try{
        const product = await productRepository.createproduct(name, desc, price, image, discount_id, product_inventory_id, product_category_id, user_penjual_id);
        return product;
    }
    catch(err){
        return err;
    }
}

const deleteproduct = async (id) => {
    try{
        const product = await productRepository.deleteproduct(id);
        return product;
    }
    catch(err){
        return err;
    }
}

const updateproduct = async (id, name, desc, price, image, discount_id, product_inventory_id, product_category_id, user_penjual_id) => {  
    try{
        const product = await productRepository.updateproduct(id, name, desc, price, image, discount_id, product_inventory_id, product_category_id, user_penjual_id);
        return product;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllproduct,
    createproduct,
    deleteproduct,
    updateproduct
}

