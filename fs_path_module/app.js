const fs = require("fs");
const path = require("path")
// console.log("1")

// fs.writeFile("./hello.txt", "hi how are you?", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created and data added successfully")
//     }

// })

// fs.writeFile("./hello.txt", "hello im tom.", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created and data added successfully")
//     }

// })


// console.log(fs.writeFileSync("./hello.txt", "hello im tom."))

// console.log("3")

// fs.readFile("./hello.txt", "utf-8",(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// const readfile = fs.readFileSync("./hell.txt", "utf-8")
// console.log(readfile)


// console.log(path.basename("./data/products.txt"))
// console.log(path.dirname(".fs_path_module/app.js"))

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__dirname))
// console.log(path.join(__dirname,"assets", "data.json"))
// console.log(path.resolve(__filename))

// fs.readFile(path.join(__dirname,"da","products.json"), (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })


// fs.appendFile(path.join(__dirname, "data", "products.txt"), "wow nioice" , (err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log("data updated successfully in file" + __filename)
//         }
// })
fs.unlink(path.join(path.join(__dirname, "data", "products.txt")),(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("deleted successfully")
    }
} )


