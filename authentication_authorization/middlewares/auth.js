const jwt = require("jsonwebtoken")
require("dotenv").config()
const users = require("../models/usersModel.js")

exports.authentication = async(req, res, next)=>{
    try {
        const {authorization} = req.headers
        if(!authorization){
            return res.status(400).json({message:"missing authorization field"})
        }
        const token  = authorization.split(" ")[1]
        const decodeToken  = jwt.verify(token, process.env.jwt_secret_key)
        console.log(decodeToken)
        const userdata = await users.findById(decodeToken.userInfo._id)
        if(userdata){
            next()
        }else{
            return res.status(401).json({message:"invalid token, please provide valid token"})
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({message:error.message})
    }
}