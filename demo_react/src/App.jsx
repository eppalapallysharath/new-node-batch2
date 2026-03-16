import React, { useState } from 'react'
import axios from 'axios'


const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const login = async(e)=>{
    try {
      e.preventDefault()
      const res = await axios.post("https://shopping-users.onrender.com/user/login", {
        email:email, 
        password:password
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    

  }

  return (
    <div>App

      <form onSubmit={login}>
        <input type='email' name="email"  onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/>
        <input type='password' name="email"  onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default App