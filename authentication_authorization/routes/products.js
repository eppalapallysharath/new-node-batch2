const express = require("express")
const router = express.Router();
const {allProducts, addProducts, deleteProducts} = require("../controllers/productsController.js")
const {authentication} = require("../middlewares/auth.js")
const { authorization} = require("../middlewares/auth.js")


router.get("/allProduct", authentication, authorization("user"), allProducts)

// add products
router.post("/addProduct", authentication, authorization("seller"), addProducts)

// delete products
router.delete("/deleteProduct/:PID", authentication, authorization("seller"), deleteProducts)
 

module.exports = router