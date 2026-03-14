const express = require("express");
const router = express.Router();
const {
  users,
  signup,
  login,
  profile,
  deleteProfile,
  createSeller,
  getSellerProfile,
  uploadProfilePic,
} = require("../controllers/usersController.js");
const { authentication } = require("../middlewares/auth.js");
const userModel = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { authorization } = require("../middlewares/auth.js");
const { multerUpload } = require("../middlewares/multeruploads.js");
const { body, validationResult } = require("express-validator");
const {validation} = require("../middlewares/validations.js")
const {signupValidations, loginValidations} = require("../validations/usersValidation.js")

router.post(
  "/signup",
  signupValidations,
//   [
//     body("name").notEmpty()
//       .withMessage("required name field")
//       .isString()
//       .withMessage("please enter a-z or A-Z")
//       .isLength({ max: 30, min: 3 })
//       .withMessage(
//         "minimum allowed 3 characters or maximum allowed 30 characters",
//       ),
//       body("email").notEmpty().withMessage("required email field")
//       .isEmail().withMessage("please enter correct email address")
//       .isLength({max:70}).withMessage("maximum allowed characters are 70"),
//       body("password").notEmpty().withMessage("required password field").isLength({min:8, max:50}).withMessage("please enter minimum 8 characters and maximum  characters 50")
//       .isStrongPassword({minLowercase:2, minUppercase:2, minSymbols:2, minNumbers:2}).withMessage("please enter minimum 8 characters and maximum  characters 50, which includes minimum  Lowercase:2, minimum Uppercase:2, minimum Symbols:2, minimumNumbers:2")
//   ],
// (req, res, next)=>{
//      const validationErr = validationResult(req)
//     if(validationErr.isEmpty() == false ){
//       return res.status(400).json({message:"validation error", validationError: validationErr.errors})
//     }else{
//         next()
//     }
//   },
validation,
  signup,
);

router.post("/login",
//     [
//     body("email").notEmpty().withMessage("required email field")
//     .isEmail().withMessage("please enter correct email address"),
//     body("password").notEmpty().withMessage("required password field")
//     .isLength({max:50}).withMessage("please enter password less than 50 characters")
// ], 
// (req, res, next)=>{
//     const validationError = validationResult(req);
//     if(validationError.isEmpty() == false ){
//         return res.status(400).json({message:"validation error", validationError:validationError.errors})
//     }else{
//         next()
//     }
// },
loginValidations,
validation,
login);

// upload profile pic
router.put(
  "/uploadProfilePic",
  multerUpload.single("profile_pic"),
  authentication,
  uploadProfilePic,
);

// for admin only
router.get("/users", authentication, authorization("admin"), users);

// for admin + user
router.get("/profile", authentication, authorization("user", "admin"), profile);

// for admin
router.delete(
  "/profile/:id",
  authentication,
  authorization("admin"),
  deleteProfile,
);

// seller signup
router.post("/sellerSignup", createSeller);
// get seller profile
router.get(
  "/getSellerProfile",
  authentication,
  authorization("seller"),
  getSellerProfile,
);

module.exports = router;
