import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AwardContext = createContext();

export const useAward = ()=>{
    const value = useContext(AwardContext);
    return value;
}

export const AwardProvider = ({children})=>{
    const [awardData, setAwardData] = useState([{
        awardname:"",
        institute:"",
        awardyear:null
    }]);
    const handleOnChange = (index,e)=>{
        const updateData = [...awardData];
        updateData[index] = {
            ...updateData[index],
            [e.target.name]:e.target.value
        }
        setAwardData(updateData)
    }
    const handleSubmitData = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("/award/create-details",{awardData},
                {headers:{
                    "Authorization": `Bearer ${token}`
                }}
            );
            if(response.status === 200){
                toast.success("award data updated successfully!!");
                setAwardData([{
                    awardname:"",
                    institute:"",
                    awardyear:null
                }])
            }else{
                toast.warn(response.data.message);
            }
        } catch (error) {
            toast.error("Internal server error in posting the award");
            console.log(error)
        }
    }
    return(
        <AwardContext.Provider value={{handleOnChange, awardData, handleSubmitData}}>
            {children}
        </AwardContext.Provider>
    )
}