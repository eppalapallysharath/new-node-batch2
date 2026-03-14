const {param, body, check} = require("express-validator");

exports.deleteProductsValidation = [
    param("PID").isMongoId().withMessage("please provide proper product id")
]

// p_name, p_price, p_description
exports.addProductValidation = [
    body("p_name").notEmpty().withMessage("required p_name field")
    .isString().withMessage("p_name allows strings only")
    .isLength({min:3, max:50}).withMessage("allows minimum 3 characters and maximum 50 characters"),
      body("p_description").notEmpty().withMessage("required p_description")
    .isString().withMessage("p_name allows strings only")
    .isLength({min:3, max:200}).withMessage("allows minimum 3 characters and maximum 50 characters"),
      body("p_price").notEmpty().withMessage("required p_price field")
    .isNumeric().withMessage("p_price allows numbers only"), 
    check("images").custom((value, {req})=>{
        if(!req.files || !req.file){
            throw new Error("images field is required")
        }
        return true
    })

]