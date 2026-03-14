const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:String, required:true},
    description:{type:String, required:true},
    sellerId:{type: mongoose.Schema.Types.ObjectId, ref:"users", required:true},
    images:{type: Array, required:true}
},{timestamps:true}) 


module.exports = mongoose.model("products", productSchema)