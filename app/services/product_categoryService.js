const product_categoryRepository = require ('../repositories/product_categoryRepository');

const getAllproduct_category = async () => {
    try{
        const product_categorys = await product_categoryRepository.getAllproduct_category();
        return product_categorys;  
    }
    catch(err){
        return err;
    }
}

const createproduct_category = async (name, desc) => {
    try{
        const product_category = await product_categoryRepository.createproduct_category(name, desc);
        return product_category;
    }
    catch(err){
        return err;
    }
}

const deleteproduct_category = async (id) => {
    try{
        const product_category = await product_categoryRepository.deleteproduct_category(id);
        return product_category;
    }
    catch(err){
        return err;
    }
}

const updateproduct_category = async (id, name, desc) => {  
    try{
        const product_category = await product_categoryRepository.updateproduct_category(id, name, desc);
        return product_category;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllproduct_category,
    createproduct_category,
    deleteproduct_category,
    updateproduct_category
}

