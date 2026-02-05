const http = require("http")

// console.log(http)
console.log("start")

http.createServer((request, response)=>{
    console.log("im http")
    response.write("im http server");
    response.end()
}).listen(3306, ()=>{console.log("server started")})

console.log("end")