import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
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

    const [getExeperienceData, setGetExperienceData] = useState([])

    const handleOnchange = (index, e)=>{
        const updateExperience = [...experienceData];
        updateExperience[index] = {
            ...updateExperience[index],
            [e.target.name]: e.target.value
        }
        setExperienceData(updateExperience)
    }
    const handleSubmitExe = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("/experience/create-exe",
                { experiencedata: experienceData },
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            if (response.status === 200) {
                toast.success("Your details were updated successfully!");
                setExperienceData([{
                    companyname: "",
                    position: "",
                    startyear: "",
                    startmonth: "",
                    endyear: "",
                    endmonth: ""
                }]);
                await fetchExperienceData();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("Internal server error in updating the experience", error);
            toast.error("Internal server error in updating the experience");
        }
    };

    const fetchExperienceData = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("/experience/view-all-details", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setGetExperienceData(response.data.getAllData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("Error fetching experience data", error);
        }
    };

    const deleteExperienceData = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete("/experience/delete-exe",{
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            })
            if(response.status === 200){
                toast.success(response.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    useEffect(()=>{fetchExperienceData()},[])
    return(
        <ExperienceContext.Provider value={{handleOnchange,experienceData,handleSubmitExe,getExeperienceData,deleteExperienceData}}>
            {children}
        </ExperienceContext.Provider>
    )
}