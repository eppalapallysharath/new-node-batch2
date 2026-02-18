import React from 'react'

const App = () => {
  const getProducts = ()=>{
    // const url = "http://localhost:3000/products"
    const url = "http://localhost:3000/products/2ee2a6aa-9675-4d3c-9f8e-4a410e60b3a5"
    // const url = "https://crud-express-uawj.onrender.com"
    fetch(url,{method:"PUT"})
    .then(res=>res.json())
    .then(data =>console.log(data))
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <h3>Products</h3>
      <button onClick={getProducts}>click me </button>
    </div>
  )
}

export default App