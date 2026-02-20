const express = require("express")
const app = express()
const cash = require("./routes/cash.js")
const insurance = require("./routes/insurance.js")
// application level middlewares app.use("path optional" , middleware function ) or app.get(path, function) app.post

// syntax of middleware function (req, res, next)=>{ }
    
    // Built-in in middlewares eg: express.json(), express.urlencoded(), express.static()
    
    function check(req, res, next){
        console.log(req.method, req.url)
        next()
    }    
    app.use(check)   
    
    app.use(express.json())
    app.use(express.urlencoded())
    app.use(express.static("assets"))
// app.use("/add",check)   


app.use("/cash", cash)

app.use("/insurance", insurance)



app.get("/",(req,res, next)=>{
    if(req.query.name=="tom"){
        next()
    }else{
        res.send("bye")
    }
}, (req, res)=>{
    res.send("hi hello im running")
})
app.put("/", (req, res)=>{
    res.send(req.body)
} )



app.post("/add", (req, res)=>{
    console.log()
    res.send(req.body)
    
})

app.use((req, res, next)=>{
    res.status(404).send("api not found with given method " +req.method+ " url "+req.url)
})


// error handling middleware
app.use((error, req, res, next)=>{
    // console.log("global error handler:.......",error)
    res.status(500).json({ message:"something went wrong, try after some time", error_message:error.message })
})

app.listen(3000, ()=>{
    console.log("server started on port 3000")
})