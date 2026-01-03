import { createContext, useEffect } from "react";
import { createContext, useState } from "react";
export const RestroContext = createContext();

export const RestroProvider=({children})=>{
  const [restaurants, setRestaurants] = useState([]);
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("evalData"))
    ||[];
    setRestaurants(data)
  },[])
    const addButton=(Restaurant)=>{
        
        const updated=[...restaurants,Restaurant]
        setRestaurants(updated);
        localStorage.setItem("evalData",JSON.stringify(updated))
    }
    const updateButton=(newData,id)=>{
        
        const updated=restaurants.map((Data)=>{
                return (Data.id===id ? newData:Data)
        });
        setRestaurants(updated)
        localStorage.setItem("evalData",JSON.stringify(updated))
    }
    const deleteRestaurant=(id)=>{
        alert("Youre deleting a restro")
        const data=restaurants.filter((data)=>
                data.id!==id

        )
setRestaurants(data);
        localStorage.setItem("evalData",JSON.stringify(data))
    }

    return(
    <RestroContext.Provider value={{restaurants,addButton, updateButton,deleteRestaurant}}>
    {children}    
    </RestroContext.Provider>
    )
}
export const usePro=useContext(RestroContext);