const express = require("express")
const route = express.Router()

route.delete("/claimRevoke",(req, res)=>{
    res.send("claim revoked")
} )



module.exports = route