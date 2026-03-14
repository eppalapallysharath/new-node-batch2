const {validationResult}  = require("express-validator")

exports.validation = (req, res, next)=>{
    const validationError = validationResult(req);
    if(validationError.isEmpty() == false ){
        return res.status(400).json({message:"validation error", validationError:validationError.errors})
    }else{
        next()
    }
}