const mongoose = require("mongoose");
require("dotenv").config()


console.log(process.env.mongoURI)
exports.connectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongoURI, {dbName:process.env.dbName})
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
}