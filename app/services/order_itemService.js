const order_itemRepository = require ('../repositories/order_itemRepository');

const getAllorder_item = async () => {
    try{
        const order_items = await order_itemRepository.getAllorder_item();
        return order_items;  
    }
    catch(err){
        return err;
    }
}

const createorder_item = async (quantity, product_id, order_detail_id) => {
    try{
        const order_item = await order_itemRepository.createorder_item(quantity, product_id, order_detail_id);
        return order_item;
    }
    catch(err){
        return err;
    }
}

const deleteorder_item = async (id) => {
    try{
        const order_item = await order_itemRepository.deleteorder_item(id);
        return order_item;
    }
    catch(err){
        return err;
    }
}

const updateorder_item = async (id, quantity, product_id, order_detail_id) => {  
    try{
        const order_item = await order_itemRepository.updateorder_item(id, quantity, product_id, order_detail_id);
        return order_item;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllorder_item,
    createorder_item,
    deleteorder_item,
    updateorder_item
}

