const express = require("express");
const router = express.Router();
const {getAllProducts, createProduct, updateProduct, deleteProduct} = require("../controllers/productsController.js")

router.get("/getAllProducts", getAllProducts)
router.post("/createProduct",createProduct )
router.put("/updateProduct/:productID", updateProduct)
router.delete("/deleteProduct/:productID", deleteProduct)

module.exports = router