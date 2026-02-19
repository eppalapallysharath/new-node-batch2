const express = require("express")
const router = express.Router()

router.get("/withdraw", (req, res)=>{
    res.send("money withdraw")
})

router.get("/deposit", (req, res)=>{
    res.send("money deposit")
})

module.exports = router