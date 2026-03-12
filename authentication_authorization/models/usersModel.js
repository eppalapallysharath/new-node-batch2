const Mongoose = require("mongoose")
const userSchema = new Mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, unique:true, trim:true},
    password:{type:String , required:true, trim:true}, 
    role:{type: String, required:true, enum:["admin", "user", "seller"], default:"user"}, 
    products:[{type:Mongoose.Schema.Types.ObjectId, ref:"products"}] }
)

module.exports = Mongoose.model("users", userSchema)