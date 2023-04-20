const cart_itemRepository = require ('../repositories/cart_itemRepository');

const getAllcart_item = async () => {
    try{
        const cart_items = await cart_itemRepository.getAllcart_item();
        return cart_items;  
    }
    catch(err){
        return err;
    }
}

const createcart_item = async (quantity, shopping_session_id, product_id) => {
    try{
        const cart_item = await cart_itemRepository.createcart_item(quantity, shopping_session_id, product_id);
        return cart_item;
    }
    catch(err){
        return err;
    }
}

const deletecart_item = async (id) => {
    try{
        const cart_item = await cart_itemRepository.deletecart_item(id);
        return cart_item;
    }
    catch(err){
        return err;
    }
}

const updatecart_item = async (id, quantity, shopping_session_id, product_id) => {  
    try{
        const cart_item = await cart_itemRepository.updatecart_item(id, quantity, shopping_session_id, product_id);
        return cart_item;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllcart_item,
    createcart_item,
    deletecart_item,
    updatecart_item
}

