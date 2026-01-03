import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import CustomerDashboard from '../Pages/CustomerDashboard';

const ProtectedRoute = ({children}) => {
    const user=localStorage.getItem("isUser")===true;
    const admin=localStorage.getItem("isAdmin")===true;
    const navigate=useNavigate();
    if(user===true)
    {
        navigate('/customerdashboard');
        localStorage.setItem("isUser",false)
    }
    if(admin===true)
    {
        localStorage.setItem("isAdmin",false)
        return children;   
        
     
    }
    else{
        navigate('/')
        return
    }

  return (
    <div>
       
    </div>
  )
}

export default ProtectedRoute