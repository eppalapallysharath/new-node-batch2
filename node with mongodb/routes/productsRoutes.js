const express = require("express");
const router = express.Router();
const {getAllProducts, addProduct, updateProduct, deleteProduct} = require("../controllers/productsController")


router.get("/getProducts", getAllProducts)
router.post("/addProduct", addProduct)
router.put("/updateProduct/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

module.exports = router