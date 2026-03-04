const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const productsRoutes = require("./routes/productsRoutes.js")
const {connectDB} = require("./configs/mongodb.js")

connectDB()
app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res)=>{
    res.json({message:"im healthy"})
})

app.use("/api/v1/products", productsRoutes)

app.use((req, res, next)=>{
    res.status(404).json({message:"api not found with give method: " + req.method + " endpoint: " + req.url  })
})

app.listen(process.env.port, ()=>{console.log("server started on port "+process.env.port)})