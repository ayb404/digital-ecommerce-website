const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    FirstName: {type:String , required: true},
    LastName: {type:String , required: true},
    Email: {type:String ,required: true},
    phone: {type:Number ,required: true},
    Product : {type:Array , required: true},
    ProductQuantity: {type:Number , required: true},
    Totalprice: {type:Number , required: true}

}
    
);




module.exports = mongoose.model('order', Order)