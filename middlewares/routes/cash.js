const express = require("express")
const router = express.Router()
const {authentication} = require("../middlewares/auth.js")
const jwt = require("jsonwebtoken")

// const a = "sharath"
// const token = jwt.sign(a,"ssadaeaseasaefa")
// console.log(token)
// console.log(jwt.verify(token, "ssadaeaseasaefa" ))

// router level middleware
// router.use((req, res, next)=>{
//     const key = req.query.xkey
//     if(key){
//         next()
//     }else{
//         res.send("you don't have key")
//     }
// })

router.post("/login", (req, res)=>{
    if(req.body.phone ==7702145910 && req.body.password =='sharath'){
        const token = jwt.sign({phone:7702145910}, "sajkeardscs")   
        res.json({token:token})
    }else{
        res.status(400).send("invalid credentials")
    }
})

router.get("/withdraw", authentication, (req, res)=>{
    res.send("money withdraw")
})

router.get("/deposit", (req, res)=>{
    res.send("money deposit")
})

module.exports = router