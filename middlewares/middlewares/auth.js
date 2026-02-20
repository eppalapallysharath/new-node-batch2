const jwt = require("jsonwebtoken")
const authentication = (req, res, next) =>{
    const token = req.headers.authorization
    const decode = jwt.verify(token, "sajkeardscs")
    if(decode){
        return next()
    }else{
        res.status(401).send("unauthorized")
    }
}

module.exports ={authentication}