const express = require("express")
const router = express.Router();
const  { users, signup, login, profile, deleteProfile, createSeller, getSellerProfile} = require("../controllers/usersController.js")
const {authentication} = require("../middlewares/auth.js")
const userModel = require("../models/usersModel.js")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const { authorization} = require("../middlewares/auth.js")


router.post("/signup", signup)

router.post("/login", login)

// for admin only
router.get("/users", authentication, authorization("admin"), users)


// for admin + user
router.get("/profile", authentication, authorization("user", "admin"), profile)


// for admin
router.delete("/profile/:id", authentication, authorization("admin"), deleteProfile)

// seller signup
router.post("/sellerSignup", createSeller)
// get seller profile
router.get("/getSellerProfile", authentication, authorization("seller"), getSellerProfile)

module.exports = router