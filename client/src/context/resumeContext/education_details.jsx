
import axios from "axios";
import { toast } from "react-toastify";
import React, { createContext, useContext, useState, useEffect } from "react";

const EducationContext = createContext();
export const useEducation = () => {
    return useContext(EducationContext);
};

export const EducationProvider = ({ children }) => {
    const [educationdata, setEducationdata] = useState([
        {
            institute: "",
            qualification: "",
            subject: "",
            startgraduyear: null,
            startgradumonth: null,
            endgraduyear: null,
            endgradumonth: null
        }
    ]);
    const [getEducationData, setGetEducationData] = useState([]);

    const handleOnChange = (index, e) => {
        const updatedEducationData = [...educationdata];
        updatedEducationData[index] = {
            ...updatedEducationData[index],
            [e.target.name]: e.target.value,
        };
        setEducationdata(updatedEducationData);
    };

    const handleEdusubmit = async () => {
        try {
            const token = localStorage.getItem("token");

            const payload = { educationdata };

            const response = await axios.post("/education/create-details", payload, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                toast.success("Education details updated!");
                setEducationdata([{
                    institute: "",
                    qualification: "",
                    subject: "",
                    startgraduyear: "",
                    startgradumonth: "",
                    endgraduyear: "",
                    endgradumonth: ""
                }]);
                await fetchEducationdata();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error in creating the education details", error);
            if (error.response) {
                toast.error(`Error: ${error.response.data.message || 'Something went wrong'}`);
            } else if (error.request) {
                toast.error("No response received from server");
            } else {
                toast.error("Error in setting up request");
            }
        }
    };
    

    const fetchEducationdata = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("/education/get-All-data", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setGetEducationData(response.data.getAllData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("error in fetching education data", error);
        }
    };

    useEffect(()=>{fetchEducationdata()},[]);

    const deleteEducationData = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete("/education/delete-details", {
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

    return (
        <EducationContext.Provider value={{ educationdata, handleOnChange, handleEdusubmit, getEducationData,deleteEducationData}}>
            {children}
        </EducationContext.Provider>
    );
};
