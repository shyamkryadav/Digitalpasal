const mongoose  = require("mongoose");
const productSchema =new mongoose.Schema({
    productName:String,
    productPrice:String
});

const Product=mongoose.model('User',productSchema);

exports.default = Product