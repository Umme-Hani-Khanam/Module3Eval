import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

const [email,setEmail]=useState("");
const[password,setPassword]=useState("");
const navigate=useNavigate();

const handleLogin=(e)=>{
    e.preventDefault();
    if(email ==="admin@gmail.com" && password==="admin1234")
    {   alert("Login successfull");
        navigate('/admindashboard');

    }
    else if(email==="customer@gmail.com" && password==="customer1234")
    {alert("Login successfull");
         localStorage.setItem("isUser",true)
        navigate('/customerdashboard');
       
    }
    else{
        alert("Invalid email or password ")
        localStorage.setItem("isAdmin",true)
        navigate('/');
    }

}

    return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" name='email' value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" name="password" value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>

    </div>
  )
}

export default Login