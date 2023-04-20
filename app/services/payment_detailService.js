const payment_detailRepository = require ('../repositories/payment_detailRepository');

const getAllpayment_detail = async () => {
    try{
        const payment_details = await payment_detailRepository.getAllpayment_detail();
        return payment_details;  
    }
    catch(err){
        return err;
    }
}

const createpayment_detail = async (amount, provider, account_name, status, payment_proof) => {
    try{
        const payment_detail = await payment_detailRepository.createpayment_detail(amount, provider, account_name, status, payment_proof);
        return payment_detail;
    }
    catch(err){
        return err;
    }
}

const deletepayment_detail = async (id) => {
    try{
        const payment_detail = await payment_detailRepository.deletepayment_detail(id);
        return payment_detail;
    }
    catch(err){
        return err;
    }
}

const updatepayment_detail = async (id, amount, provider, account_name, status, payment_proof) => {  
    try{
        const payment_detail = await payment_detailRepository.updatepayment_detail(id, amount, provider, account_name, status, payment_proof);
        return payment_detail;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllpayment_detail,
    createpayment_detail,
    deletepayment_detail,
    updatepayment_detail
}

