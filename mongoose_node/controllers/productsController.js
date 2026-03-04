const Products = require("../models/productsModel.js")

exports.getAllProducts = async(req, res)=>{
    try {
        const data = await Products.find();
        res.status(200).json({message: "fetched all products", data: data})
    } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again"})
    }
}


exports.createProduct = async(req, res) => {
    try {
        const createProduct = await Products.insertOne({
            title:req.body.title, 
            price:req.body.price,
            category:req.body.category, 
            rating:req.body.rating,
            description:req.body.description
        }) 
        res.status(200).json({message:"product added successfully", data:createProduct})
    } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again"})
    }
   
}

exports.updateProduct = (req, res) => {
    res.send("update products")
}

exports.deleteProduct = (req, res) =>{
    res.send("product deleted successfully")
}