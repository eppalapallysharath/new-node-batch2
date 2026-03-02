const express = require("express")
const app = express();
const productsRoutes = require("./routes/productsRoutes.js")
const {connectDB} = require("./config/mongodb.js")

connectDB()
app.use(express.json())
app.use(express.urlencoded())
app.use("/products", productsRoutes)

app.get("/", (req, res)=>{
    res.send("hello im express server")
})

app.listen(8000,()=>{console.log("server started on port 8000")})
