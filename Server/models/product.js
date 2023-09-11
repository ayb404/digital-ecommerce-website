const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    Name: {type:String , required: true},
    Category: {type:String , required: true},
    Description: {type:String ,required: true},
    Price : {type: String , required:true},
    Images: {type:String , required: true},
    rates: {type:Number , required:true},
    Quantity: {type:Number , required:true}
    

}
    
);




module.exports = mongoose.model('product', product)