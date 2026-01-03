import React, { useState } from 'react'
// import { RestroContext } from '../context/RestroContext';
import RestaurantCard from './RestaurantCard';

const AdminDashboard = ({addButton}) => {
    const [name,setName]=useState("");
    const[cat,setCat]=useState("Rajasthani");
    const[parking,setParking]=useState("Yes");
const[address,setAddress]=useState("");
    
  return (
    <div>
        <h2>AdminDashboard</h2>
        <div className='sidebar'>
            <form>
                <input type="text" name="name" value={name} placeholder='Enter Restaurant Name' onChange={(e)=>setName(e.target.value)}/>
                <select id="category" onChange={(e)=>setCat(e.target.value)}>
                    <option value="Rajashthani">Rajasthani</option>
                    <option value="Gujrati">Gujrati</option>
                    <option value="Mughlai">Mughlai</option>
                    <option value="Jain">Jain</option>
                    <option value="Thai">Thai</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South Indian">South Indian</option>
   
                </select>
                <input type="text" name="address" value={address} placeholder='Enter address' onChange={(e)=>setAddress(e.target.value)}/>
                <select id="parking" onChange={(e)=>setParking(e.target.value)}>
                    <option value="Yes">Parking Lot yes</option>
                    <option value="No">Parking lot No</option>
                </select>
         <p> <image text ="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"/>
                <button onClick={addButton}>Add</button></p>      
            </form>
        </div>
        
        <RestaurantCard />
        </div>
  )
}

export default AdminDashboard