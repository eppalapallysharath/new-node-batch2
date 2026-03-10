const express = require("express")
const router = express.Router();
const {allProducts} = require("../controllers/productsController.js")
const {authentication} = require("../middlewares/auth.js")

router.get("/allProduct", authentication, allProducts)

 

module.exports = router