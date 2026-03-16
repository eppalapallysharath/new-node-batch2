const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.js")
const { connectDB } = require("./configs/db.js")
require("dotenv").config()
const productsRoutes = require("./routes/products.js") 
const cors = require("cors")
// const jwt = require("jsonwebtoken")


// const name = "tom";
// const token = jwt.sign({name:name}, "asndewjbwjbsddnajbndsand", {algorithm:"HS256", expiresIn:"1m"})
// console.log(token)
// console.log(jwt.verify(token, "asndewjbwjb1231sddnajbndsand"))

// const t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidG9tIiwiaWF0IjoxNzczMTE4MTkzLCJleHAiOjE3NzMxMTgyNTN9.dKlKCcuQh_9DF9d9CEMDpu6bLNczoMhV0FOJXZKH"
// console.log(jwt.verify(token.slice(2), "asndewjbwjbsddnajbndsand"))
app.use(cors({origin:["http://localhost:5173", "https://shopingdemo.vercel.app"], credentials:true}))

connectDB()
app.use(express.json())
app.use(express.urlencoded())

app.use("/user", usersRoutes)
app.use("/products", productsRoutes)
app.get("/", (req, res)=>{
    res.send("im healthy running successfully")
})


app.listen(3002, ()=>{console.log("server started")})
