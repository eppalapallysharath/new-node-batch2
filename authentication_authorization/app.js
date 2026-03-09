const express = require("express");
const app = express();
const usersRoutes = require("./routes/users.js")
const { connectDB } = require("./configs/db.js")
require("dotenv").config()

connectDB()
app.use(express.json())
app.use(express.urlencoded())

app.use("/user", usersRoutes)
app.get("/", (req, res)=>{
    res.send("im healthy running successfully")
})


app.listen(3002, ()=>{console.log("server started")})
