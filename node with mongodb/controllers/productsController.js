const {getProducts, insertProduct, update, deleteItem} = require("../config/mongodb.js")

const getAllProducts = async(req, res) => {
  const products = await getProducts()
  res.json(products)
};

const addProduct = async(req, res)=>{
    // console.log(req.body)
    const data = await insertProduct(req.body)
    res.json({message:"added successfully", data})
}

const updateProduct = async(req, res)=>{
    const updateProduct = await update(req.params,req.body)
    res.json({message:"update product", data:updateProduct})
}

const deleteProduct = async (req, res) =>{
    const product = await deleteItem(req.params)
    res.json({message:"product deleted", product})
}

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };
