const http = require("http");

const server = http.createServer((req, res)=>{
    // console.log("hi")
    // console.log(res)
    // res.write("hi hello")
    // res.end()
    if(req.url==="/" && req.method ==="GET"){
        res.write("im default api")
        res.end()
    }else if(req.url=="/products" && req.method=="GET"){
        res.write("products details")
        res.end()
    }else if(req.url=="/products" && req.method =="POST"){
        res.write("adding products in cart")
        res.end()
    }
    else if(req.url =="/addProducts" && req.method=="POST"){
        res.statusCode=201
        res.write("products added successfully")
        res.end()
    }else if(req.url == "/updateProducts" && req.method =="PUT"){
        res.statusCode=200
        res.write("product updated successfully")
        res.end()
    }else if(req.url == "/deleteProduct" && req.method == "DELETE"){
        res.statusCode = 200
        res.write("delete successfully")
        res.end()
    }
    else{
        res.statusCode = 404
        res.write("api not found")
        res.end()
    }
})
server.listen(8080,()=>{console.log("server started on port 8080")})