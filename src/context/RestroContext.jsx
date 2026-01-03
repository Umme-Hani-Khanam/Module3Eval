import { useContext } from "react";



export const RestroContext=useContext();

export const RestroProvider=()=>{
const [inputData,setInputData]=useState({
        restaurantId:"",
        restaurantName:"",
        address:"",
        type:"",
        parkingLot:true,
        image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    
    })
    const addButton=(Restaurant,id)=>{
        localStorage.setItem("evalData",Restaurant);
        setInputData((prev)=>[...prev,...Restaurant,id=Date.now()])
        setInputData( 
        restaurantName="",
        address="",
        type="",
        parkingLot=true,
        image="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    )
    }
    const updateButton=()=>{
        
    }

    return
(
    <>
    <RestroContext.Provider values={addButton}>
        
    </RestroContext.Provider>
    </>
)
}
export const usePro=useContext(RestroContext);