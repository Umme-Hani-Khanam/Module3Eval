import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import ProtectedRoute from './Routes/ProtectedRoute'
import AdminDashboard from './Pages/AdminDashboard'
import CustomerDashboard from './Pages/CustomerDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path='/admindashboard' element={
                <ProtectedRoute>
                  <AdminDashboard/>
                </ProtectedRoute>}/>


              
      <Route path="/customerdashboard" element={
        <ProtectedRoute>
          <CustomerDashboard/>
        </ProtectedRoute>
      }/>

             
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App