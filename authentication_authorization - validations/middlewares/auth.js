const jwt = require("jsonwebtoken")
require("dotenv").config()
const users = require("../models/usersModel.js")

exports.authentication = async(req, res, next)=>{
    try {
        const {authorization} = req.headers
        // if(!authorization){
        //     return res.status(400).json({message:"missing authorization field"})
        // }
        const token  = authorization.split(" ")[1]
        const decodeToken  = jwt.verify(token, process.env.jwt_secret_key)
        const userdata = await users.findOne({email:decodeToken.userInfo.email})
        if(userdata){
            req.user = userdata
            next()
        }else{
            return res.status(401).json({message:"invalid token, please provide valid token"})
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({message:error.message})
    }
}

exports.authorization = (...roles) =>{
    return async(req, res, next)=>{
        try {
            // const {authorization}= req.headers
            // const token  = authorization.split(" ")[1]
            // const decode = jwt.verify(token, process.env.jwt_secret_key )
            // const check = roles.includes(decode?.userInfo?.role)
            // console.log("auth .....", roles, decode?.userInfo?.role  ,check)
            // if(check){
            //     next()
            // }else{
            //     return res.status(403).json({message: "unauthorized user/role"})
            // }

            const userRole = await users.findById(req.user._id, {role:true})

            const checkRole = roles.includes(userRole.role)
            console.log(checkRole, userRole , roles)
            if(checkRole){
                next()
            }else{
                return res.status(403).json({message: "unauthorized user/role"})
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: error });
        }   
    }
}