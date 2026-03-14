const {body} = require("express-validator")

exports.signupValidations =  [
    body("name").notEmpty()
      .withMessage("required name field")
      .isString()
      .withMessage("please enter a-z or A-Z")
      .isLength({ max: 30, min: 3 })
      .withMessage(
        "minimum allowed 3 characters or maximum allowed 30 characters",
      ),
      body("email").notEmpty().withMessage("required email field")
      .isEmail().withMessage("please enter correct email address")
      .isLength({max:70}).withMessage("maximum allowed characters are 70"),
      body("password").notEmpty().withMessage("required password field").isLength({min:8, max:50}).withMessage("please enter minimum 8 characters and maximum  characters 50")
      .isStrongPassword({minLowercase:2, minUppercase:2, minSymbols:2, minNumbers:2}).withMessage("please enter minimum 8 characters and maximum  characters 50, which includes minimum  Lowercase:2, minimum Uppercase:2, minimum Symbols:2, minimumNumbers:2")
  ]

exports.loginValidations = [
    body("email").notEmpty().withMessage("required email field")
    .isEmail().withMessage("please enter correct email address"),
    body("password").notEmpty().withMessage("required password field")
    .isLength({max:50}).withMessage("please enter password less than 50 characters")
]  