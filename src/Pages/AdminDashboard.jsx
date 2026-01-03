import React from 'react'

const AdminDashboard = () => {
    const [inputData,setInputData]=useState({
        restaurantId:"",
        restaurantName:"",
        address:"",
        type:"",
        parkingLot:true,
        image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    
    })
  return (
    <div>
        <h2>AdminDashboard</h2>
        <div className='sidebar'>
            <form>
                <input type="text" name="name" value={restaurantName} placeholder='Enter Restaurant Name' onChange={(e)=>setInputData(e.target.value)}/>
                <select id="category">
                    <option value="rajashthani">Rajasthani</option>
                    <option value="Gujrati">Gujrati</option>
                    <option value="Mughlai">Mughlai</option>
                    <option value="Jain">Jain</option>
                    <option value="Thai">Thai</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South Indian">South Indian</option>
   
                </select>
                <select id="parking">
                    <option value="Yes">Parking Lot yes</option>
                    <option value="No">Parking lot No</option>
                </select>
                <image url ="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"/>
                <button onClick={addButton}>Add</button>
            </form>
        </div>
        </div>
  )
}

export default AdminDashboard