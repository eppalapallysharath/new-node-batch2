const products = require("../models/productsModel.js")
const jwt = require("jsonwebtoken")
const userModel = require("../models/usersModel.js")

exports.allProducts=async(req, res)=>{
    try {
     
        const productsData = await products.find().populate("sellerId", ["name", "email", "-_id"])
        res.json({message:"fetched products data", data: productsData})
       
    } catch (error) {
        console.log(error);
    res.status(400).json({ message: error });
    }
}


exports.addProducts=async(req, res)=>{
    try {
        const {p_name, p_price, p_description} = req.body
        console.log(req.body)
        const createProduct = await products.create({title:p_name, price:p_price, description:p_description, sellerId:req.user._id})
        const updateInUser = await userModel.findByIdAndUpdate(req.user._id, {$push:{products:createProduct._id}})
        res.status(200).json({message: "product added successfully", data:createProduct})
    } catch (error) {
        console.log(error);
    res.status(400).json({ message: error });
    }
}

exports.deleteProducts = async(req, res)=>{
    try {
        const {PID} = req.params
        const checkProduct =  await products.findOne({_id:PID, sellerId:req.user._id})
        if(checkProduct){
            await products.deleteOne({_id:PID, sellerId:req.user._id})
            res.status(200).json({message:"product deleted successfully"})
        }else{
            res.status(404).json({message:"product not found in your created products"})
        }
    } catch (error) {
        console.log(error);
    res.status(400).json({ message: error });
    }
}