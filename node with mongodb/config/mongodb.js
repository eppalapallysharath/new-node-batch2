const {MongoClient, ObjectId} = require("mongodb")

const uri = "mongodb://localhost:27017/";

const client = new MongoClient(uri);
let db;

const connectDB = async ()=>{
    try {
        await client.connect();
        db = client.db("node_mongodb")
        console.log("database is connected")
        // return db;
    } catch (error) {
        console.log("database is not connected there is some error", error)

    }
}


const getProducts = async()=>{
    const data = await db.collection("Products").find().toArray();
    return data
}

const insertProduct = async (body) =>{
    console.log(body)
    const data = await db.collection("Products").insertOne({title:body.title, price:body.price})
    return data
}

const update = async(params, body)=>{
    console.log("update", params, body)
    const data = await db.collection("Products").updateOne({_id:new ObjectId(params.id)},{$set:{title:body.title, price:body.price}}) 
    return data
}

const deleteItem = async(params)=>{
    const data = await db.collection("Products").deleteOne({_id:new ObjectId(params.id)})
    return data
} 

module.exports = {connectDB, getProducts, insertProduct, update, deleteItem}