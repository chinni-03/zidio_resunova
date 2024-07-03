import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
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
    const [getAwardData, setGetAwardData] = useState([]);

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
            const response = await axios.post("/award/create-details",{awarddata:awardData},
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

    const fetchAwardData = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("/award/view-all-data", {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })

        if (response.status === 200) {
                setGetAwardData(response.data.getAllData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("error in fetching education data", error);
        }
    }
    useEffect(()=>{fetchAwardData()},[getAwardData])
    return(
        <AwardContext.Provider value={{handleOnChange, awardData, handleSubmitData, getAwardData}}>
            {children}
        </AwardContext.Provider>
    )
}