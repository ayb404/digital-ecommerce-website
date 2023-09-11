const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    Name: {type:String , required: true},
    Email: {type:String ,required: true},
    Subject: {type:String , required: true},
    Message: {type:String ,required: true},
}
    
);




module.exports = mongoose.model('contact', Contact)