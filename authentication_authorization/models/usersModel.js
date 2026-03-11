const { default: mongoose } = require("mongoose")
const Mongoose = require("mongoose")
const userSchema = new Mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, unique:true, trim:true},
    password:{type:String , required:true, trim:true}, 
    role:{type: String, required:true, enum:["admin", "user"], default:"user"}
})

module.exports = mongoose.model("users", userSchema)