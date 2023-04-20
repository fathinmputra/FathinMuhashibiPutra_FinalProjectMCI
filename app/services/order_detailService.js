const order_detailRepository = require ('../repositories/order_detailRepository');

const getAllorder_detail = async () => {
    try{
        const order_details = await order_detailRepository.getAllorder_detail();
        return order_details;  
    }
    catch(err){
        return err;
    }
}

const createorder_detail = async (total, payment_detail_id, user_pembeli_id) => {
    try{
        const order_detail = await order_detailRepository.createorder_detail(total, payment_detail_id, user_pembeli_id);
        return order_detail;
    }
    catch(err){
        return err;
    }
}

const deleteorder_detail = async (id) => {
    try{
        const order_detail = await order_detailRepository.deleteorder_detail(id);
        return order_detail;
    }
    catch(err){
        return err;
    }
}

const updateorder_detail = async (id, total, payment_detail_id, user_pembeli_id) => {  
    try{
        const order_detail = await order_detailRepository.updateorder_detail(id, total, payment_detail_id, user_pembeli_id);
        return order_detail;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllorder_detail,
    createorder_detail,
    deleteorder_detail,
    updateorder_detail
}

