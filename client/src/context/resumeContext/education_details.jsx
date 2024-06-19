
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
            startgraduyear: 0,
            startgradumonth: 0,
            endgraduyear: 0,
            endgradumonth: 0
        }
    ]);

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
            const response = await axios.post("/education/create-details", 
                { educationdata }, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            if (response.status === 200) {
                toast.success("Education details updated!");
                setEducationdata([{
                    institute: "",
                    qualification: "",
                    subject: "",
                    startgraduyear: 0,
                    startgradumonth: 0,
                    endgraduyear: 0,
                    endgradumonth: 0
                }]);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("Error in creating the education details", error);
        }
    };

    return (
        <EducationContext.Provider value={{ educationdata, handleOnChange, handleEdusubmit }}>
            {children}
        </EducationContext.Provider>
    );
};
