const express = require("express")
const app = express()

// content-type = application/json
app.use(express.json())

app.get("/", (req, res)=>{
    // res.send(), res.json, res.status, 
    res.send("hi im default api")
})

app.post("/products", (req, res)=>{
    res.header("x-key", "sjajkm")
    res.status(201).json({name:"tom"})
})

app.put("/editproducts", (req, res)=>{
    res.status(400).send("products updated successfully")
})

app.delete("/deleteproduct", (req, res)=>{
    res.status(200).send("deleted successfully")
})

app.get("/students/:studentid", (req, res)=>{
    console.log(req.params)
    res.json({query:req.query,  params:req.params})
})


app.post("/students/:studentid/:email", (req, res)=>{
    console.log(req.body)
    res.json({query:req.query,  params:req.params, body:req.body})
})




app.listen(3000, ()=>{console.log("server started at port 3000")})