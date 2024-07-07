import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const SkillContext = createContext();

export const useSkill = ()=>{
    const value = useContext(SkillContext);
    return value;
}

export const SkillProvider = ({children})=>{
    const [skillData, setSkillData] = useState([{
        skill: ""
    }])

    const [getSkilldata, setGetSkillData] = useState([]);

    const handleOnChange = (index, e)=>{
        const updateData = [...skillData];
        updateData[index] = {
            ...updateData[index],
            [e.target.name]: e.target.value
        }
        setSkillData(updateData)
    }

    const handleSubmitData = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("/skill/create",{skilldata:skillData},
                {headers:{
                    "Authorization": `Bearer ${token}`
                }}
            );
            if(response.status === 200){
                toast.success("skill updated successfully!");
                setSkillData([{
                    skill: ""
                }])
            }else{
                toast.warn(response.data.message)
            }
        } catch (error) {
            toast.error("Internal server error in posting the project");
            console.log(error)
        }
    }

    const fetcSkillData = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("/skill/view-all-data",{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
            if(response.status===200){
                setGetSkillData(response.data.getAllData)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("Error fetching experience data", error);
        }
    }

    const deleteSkillData = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete("/skill/delete",{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });
            if(response.status === 200){
                toast.success(response.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(()=>{fetcSkillData()},[])
    return(
        <SkillContext.Provider value={{skillData, handleOnChange, handleSubmitData, getSkilldata, deleteSkillData}}>
            {children}
        </SkillContext.Provider>
    )
}