const express = require("express");
const router = express.Router();
const {getAllProducts, createProduct, updateProduct, deleteProduct, updateCategory, getProduct} = require("../controllers/productsController.js")

router.get("/getAllProducts", getAllProducts)
router.post("/createProduct",createProduct )
router.put("/updateProduct/:productID", updateProduct)
router.put("/updateCategory/:category", updateCategory)
router.delete("/deleteProduct/:productID", deleteProduct)
router.get("/getProduct/:productID", getProduct)

module.exports = router