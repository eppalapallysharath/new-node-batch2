const Mongoose = require("mongoose")
const userSchema = new Mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, unique:true, trim:true},
    password:{type:String , required:true, trim:true}, 
    role:{type: String, required:true, enum:["admin", "user", "seller"], default:"user"}, 
    products:[{type:Mongoose.Schema.Types.ObjectId, ref:"products"}], 
    profile_pic:{
        file_path:{
            type:String, trim:true, default:"default.png"
        },
        file_url:{
            type:String, trim:true,default: "https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
        }
    }
 }
)

module.exports = Mongoose.model("users", userSchema)