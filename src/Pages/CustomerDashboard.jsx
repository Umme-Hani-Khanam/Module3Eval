import React, { useContext, useState } from 'react'
// import {  usePro } from '../context/RestroContext'

const CustomerDashboard = (restaurants) => {
// const restaurants=usePro();
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
      

    </div>)
}

export default CustomerDashboard