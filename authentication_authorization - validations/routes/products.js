const express = require("express")
const router = express.Router();
const {allProducts, addProducts, deleteProducts} = require("../controllers/productsController.js")
const {authentication} = require("../middlewares/auth.js")
const { authorization} = require("../middlewares/auth.js")
const {multerUpload} = require("../middlewares/multeruploads.js")
const {deleteProductsValidation, addProductValidation} = require("../validations/products.js")
const {validation} = require("../middlewares/validations.js")
const {authValidation} = require("../validations/auth.js")

router.get("/allProduct", authValidation, validation ,authentication, authorization("user"), allProducts)

// add products
router.post("/addProduct", multerUpload.array("images", 5), addProductValidation, validation, authValidation, validation ,authentication, authorization("seller"), addProducts)

// delete products
router.delete("/deleteProduct/:PID", deleteProductsValidation, authValidation,  validation, authentication, authorization("seller"), deleteProducts)
 

module.exports = router