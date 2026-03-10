const products = require("../models/productsModel.js")
const jwt = require("jsonwebtoken")

exports.allProducts=async(req, res)=>{
    try {
     
        const productsData = await products.find()
        res.json({message:"fetched products data", data: productsData})
       
    } catch (error) {
        console.log(error);
    res.status(400).json({ message: error });
    }
}