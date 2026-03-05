const Products = require("../models/productsModel.js")

exports.getAllProducts = async(req, res)=>{
    try {
        const {category} = req.query
        if(category){
            const categoryData = await Products.find({category:category}, {__v:false})
            res.status(200).json({message: "fetched products based on category", data: categoryData})
        }else{
            const data = await Products.find();
            res.status(200).json({message: "fetched all products", data: data})
        }
        
    } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again"})
    }
}


exports.createProduct = async(req, res) => {
    try {
        const {title, price, category, rating, description} = req.body
        if(!title || !price || !category ){
            return res.status(427).json({messageL:"validation error", error:"missing field  title, price, category"})
        }
        const check = await Products.findOne({title:title}, {title :true })
        if(check){
            return res.status(409).json({message:"title already existed"})
        }
        const createProduct = await Products.insertOne({
            title:title, 
            price:price,
            category:category, 
            rating:rating,
            description:description
        }) 
        res.status(200).json({message:"product added successfully", data:createProduct})
    } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again", error:error})
    }
   
}

exports.updateProduct = async(req, res) => {
    try {
        const {productID} = req.params
        if(productID.length !== 24){
            return res.status(427).json({message:"provide proper mongodb id"})
        }
        // Products.findByIdAndUpdate
        // Products.updateOne or updateMany
        // const update = await Products.findByIdAndUpdate(productID, {
        //     title:req.body.title,
        //     price:req.body.price,
        //     category:req.body.category,
        //     rating:req.body.rating
        // }, {new:true})
        const check = await Products.findOne({_id:Object(productID)}, {title:true})
        if(!check){
            return res.status(404).json({message: "product not found"})
        }
        const checkTitle = await Products.findOne({title:req.body.title}, {title:true})
        console.log(checkTitle)
        if(checkTitle) {
            return res.status(409).json({message:"title already existed"})
        }
        const update = await Products.updateOne({_id:productID}, {
            title:req.body.title,
            price:req.body.price,
            category:req.body.category,
            rating:req.body.rating
        }, {new:true})
        res.json({message:"updated successfully", data: update})
    } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again"})
    }
}

exports.updateCategory = async(req, res)=>{
    try {
        const {category} = req.params
        const {newCategory} = req.body
        const updateCategory = await Products.updateMany({category:category}, {category:newCategory})
        res.status(200).json({message:"category  updated", data:updateCategory})
     } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again"})
    }
}

exports.deleteProduct = async(req, res) =>{
    try {
        const {productID} = req.params;
        // const check = await Products.findById(productID) it return single {}; or findOne it return single {} or find it returns array of object [{}]
        const check = await Products.findOne({_id:productID});
        // if(check){
        //     const deleteProduct = await Products.findByIdAndDelete(productID)
        //     res.status(200).json({message:"Product Deleted successfully", data: deleteProduct})
        // }else{
        //     res.status(404).json({message:"product not found"})
        // }
        if(!check){
            return res.status(404).json({message:"product not found"})
        }
        // const deleteProduct = await Products.findByIdAndDelete(productID) or deleteMany or deleteOne
        const deleteProduct = await Products.deleteOne({_id:productID})
        return res.status(200).json({message:"Product Deleted successfully", data: deleteProduct})
    } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again"})
    }
}

exports.getProduct = async(req, res) =>{
    try {   
        const {productID} = req.params;
        // const product = await Products.findById(productID )
        const product = await Products.findOne({_id:Object(productID)},{__v:false} )
        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        return res.status(200).json({message:"fetched product", data: product}) 
    } catch (error) {
        console.log({message:"error creating product", error: error});
        res.status(400).json({message:"something went wrong, try again"})
    }
}

