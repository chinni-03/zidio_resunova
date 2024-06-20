import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const ExperienceContext = createContext();
export const useExperience = ()=>{
    const value = useContext(ExperienceContext);
    return value
}

export const ExperienceProvider = ({children})=>{
    const [experienceData, setExperienceData] = useState([
        {
            companyname:"",
            position:"",
            startyear:null,
            startmonth: null,
            endyear:null,
            endmonth: null
        }
    ]);

    const handleOnchange = (index, e)=>{
        const updateExperience = [...experienceData];
        updateExperience[index] = {
            ...updateExperience[index],
            [e.target.name]: e.target.value
        }
        setExperienceData(updateExperience)
    }
    const handlesubmitExe = async ()=>{
        try {
            const token = localStorage.getItem("token");
        const response = await axios.post("/experience/create-exe",
            {experienceData},
            {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            });
            if(response.status === 200){
                toast.success("your details updated successfully!!");
                setExperienceData([{
                    companyname:"",
                    position:"",
                    startyear:null,
                    startmonth: null,
                    endyear:null,
                    endmonth: null
                }])
            }else{
                toast.error(response.data.message);
            }
            
        } catch (error) {
            console.log("Internal server error in updating the experience", error)
        }

    }
    return(
        <ExperienceContext.Provider value={{handleOnchange,experienceData,handlesubmitExe}}>
            {children}
        </ExperienceContext.Provider>
    )
}