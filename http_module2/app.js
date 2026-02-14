const http = require("http")
const url = require("url")

const dataArray = []

http.createServer((req, res)=>{
    const urlPath = url.parse(req.url, true)
    const [ a, pathName,pathParams] =  urlPath.pathname.split("/")
    console.log(pathName, pathParams)
    if(urlPath.pathname == "/" && req.method == "GET"){
        res.write("im default api")
        res.end()
    }else if(urlPath.pathname=="/createUser" && req.method == "POST"){
        let body = ""
        req.on("data",(chunk)=>{ body+=chunk.toString()})
        req.on("end",()=>{
            console.log(req.headers)
            dataArray.push(body)
            // res.setHeader("x-key","sdahnjkanksamkl")
            // res.statusCode = 201
            res.writeHead(201,{"content-type":"application/json"})
            res.write(JSON.stringify(dataArray))
            res.end()
        })
        // res.write(JSON.stringify({"message":"user created successfully"}))
        // res.end()
    }else if(urlPath.pathname=="/getuser" && req.method=="GET"){
        if(Object.keys(urlPath.query).length >0){
            res.write(JSON.stringify({  message: "your query" , data:Object.entries(urlPath.query)}))
            res.end()
        }else{
            res.write("you didn't provide any query")
            res.end()
        }
    }else if(urlPath.pathname == `/${pathName}/${pathParams}` && req.method =="GET"){
        const d = [{id:1, name:"jerry"}, {id:2, name:"jerry"}]
        const v =  d.find((value)=>value.id == pathParams)
        if(v){
            res.write(JSON.stringify(v))
            res.end()
        }else{
            res.writeHead(400)
            res.write("no user found with id")
            res.end()
        }
    }
    else{
        res.writeHead(404)
        res.write("no api found")
        res.end()
    }

    
}).listen(3000,()=>{console.log("server started on port 3000")})