import axios from "axios";
import { createContext, useContext, useState } from "react";
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
            const response = await axios.post("/skill/create",{skillData},
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
    return(
        <SkillContext.Provider value={{skillData, handleOnChange, handleSubmitData}}>
            {children}
        </SkillContext.Provider>
    )
}