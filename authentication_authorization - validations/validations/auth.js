const {header} = require("express-validator")

exports.authValidation = [
    header("Authorization").notEmpty().withMessage("required Authorization field for jwt token")
]