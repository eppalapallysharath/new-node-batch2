const users = require("../models/usersModel.js")
const bcryptjs = require("bcryptjs")


// const str = "sharath";

// let hashed = bcryptjs.hashSync(str, 12)

// const ab = bcryptjs.hashSync(str, 14)

// console.log(hashed)
// const a = "tom"
// console.log(bcryptjs.compareSync(ab, hashed)) //  string -> encrypt str === hashed
 
exports.signup = async(req, res)=>{
    try {
        const {name, email, password} = req.body
        const checkEmail = await users.findOne({email:email})
        if(checkEmail){
            return res.status(409).json({message:"email already existed"})
        }else{
            const encryptPassword = await bcryptjs.hash(password, 12)
            const createUser = await users.create({
            name:name,
            email:email,
            password:encryptPassword
        })
        res.status(200).json({message:"user signup successfully", data: createUser})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error}) 
    }
}

exports.login = async(req, res)=>{
    try {
        const {email, password} = req.body
        const user = await users.findOne({email:email})
        if (!user){
            return res.status(400).json({message:"invalid email/password"})
        }
        const checkPassword = await bcryptjs.compare(password, user.password)
        checkPassword === true ? res.status(200).json({message:"login successful", data:user}) : res.status(400).json({message:"invalid email/password"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error}) 
    }
}

exports.users = async(req, res)=>{
    try {
        res.status(200).json({message:"users list fetched successfully", data:[]})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error})   
    }
}