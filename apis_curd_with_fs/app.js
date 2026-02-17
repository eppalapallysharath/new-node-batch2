const express = require("express");
const app = express();
const uuid = require("uuid").v4()
const fs = require("fs")
const path = require("path")


// middleware to get data
app.use(express.json())
app.use(express.urlencoded(true))

// const data = [
//   {
//     id: "2ee2a6aa-9675-4d3c-9f8e-4a410e60b3a5",
//     title: "samsung galaxy s26",
//     category: "mobiles",
//     brand: "samsung",
//   },
//   {
//     id: "ff3adc50-e9ef-412a-a893-1e6c75512967",
//     title: "Lenovo yog book",
//     category: "laptops",
//     brand: "Lenovo",
//   },
// ];


const filePath = path.join(__dirname, "data", "products.json")

// default route or / route
app.get("/", defaultRoute);
function defaultRoute(req, res) {
  res.json({ message: "success" });
}

app.get("/products", getProducts);
function getProducts(req, res) {
//   res
//     .status(200)
//     .json({ message: "products data fetched successfully", productsData: data });

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    res.status(200).json({message: ":products data fetched successfully", products: data})
}

app.post("/products", addProduct)

function addProduct(req, res){
    console.log(req.body)
    // const product = {id:uuid,title:req.body.title, category:req.body.category, brand:req.body.brand}
    // data.push(product)
    // res.status(201).json({message:"new product added successfully", productData:data})
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    const product = {id:uuid,title:req.body.title, category:req.body.category, brand:req.body.brand}
    data.push(product)
    const newData  = fs.writeFileSync(filePath, JSON.stringify(data))
    if(!newData){
        res.status(201).json({message:"products added successfully", products:data})
    }else{
        res.status(400).json({message:"something went wrong"})
    }
    

}

app.put("/products/:productId", updateProducts)
function updateProducts (req, res){
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    const check =  data.find(val => val.id == req.params.productId)    
    if(check){
        for (let v of data){
            if(v.id == req.params.productId){
                v.title= req.body.title,
                v.category = req.body.category,
                v.brand = req.body.brand
            }
        }
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(200).json({message:"product updated successfully", product:data})
    }else{
        res.status(404).json({message:"product not found"})
    }

}

app.delete("/products/:id", deleteProduct)
function deleteProduct(req, res){
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    const check = data.find(val => val.id ==req.params.id )
    if(check){
        const removedata = data.filter(val => val.id !== req.params.id)
        fs.writeFileSync(filePath, JSON.stringify(removedata))
        res.status(204).json({message:"deleted successfully"})
    }else{
        res.status(404).json({message: "product not found"})
    }
}

app.get("/filterProducts",filterProducts)

function filterProducts(req, res){
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    if(req.query.brand){
        const filterData = data.filter(val => val.brand == req.query.brand) 
        res.status(200).json({message:"fetched brand filter data", product:filterData })
    }else if(req.query.category){
        const filterData = data.filter(val => val.category == req.query.category) 
        res.status(200).json({message:"fetched category filter data", product:filterData })
    }else if(req.query.title){
        const filterData = data.filter(val => val.title == req.query.title) 
        res.status(200).json({message:"fetched title filter data", product:filterData })
    }else{
        res.status(400).json({message:"no such filters are available"})
    }
}

app.listen(3000, () => {
  console.log("server started on port 3000");
});
