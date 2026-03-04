const mongoose = require("mongoose");
require("dotenv").config()

exports.connectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongoURI, {dbName:process.env.databaseName})
        console.log({message:"database is connected successfully"})
    } catch (error) {
     console.log({ message:"database is not connected there is some error", error:error})   
    }
}
