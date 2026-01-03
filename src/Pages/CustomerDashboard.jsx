import React, { useContext } from 'react'
import AdminDashboard from './AdminDashboard'
// import { usePro } from '../context/RestroContext'

const RestaurantCard = ({restaurants,isAdmin ,updateButton,deleteRestaurant}) => {

   

  return (
    <div>
      <p>Restaurant name='{restaurants.name}'
        <br/>
        Restaurant Address="{restaurants.address}"
        <br/>
        Type:{restaurants.cat}
<br/>
parking availability :{restaurants.parking}
      </p>
      {isAdmin && <>
      <button onClick={updateButton} Navigate to="/admin/restaurants/update
">Edit</button>
      <button onClick={deleteRestaurant} >Delete</button>
      </>}

    </div>
  )
}

export default RestaurantCard