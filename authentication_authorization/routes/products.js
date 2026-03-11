const express = require("express")
const router = express.Router();
const {allProducts} = require("../controllers/productsController.js")
const {authentication} = require("../middlewares/auth.js")
const { authorization} = require("../middlewares/auth.js")


router.get("/allProduct", authentication, authorization("user"), allProducts)

 

module.exports = router