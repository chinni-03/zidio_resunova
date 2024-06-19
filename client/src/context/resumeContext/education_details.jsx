// import axios from "axios";
// import { toast } from "react-toastify";

// const { createContext, useContext, useState, useEffect } = require("react");

// const EducationContext = createContext();
// export const useEducation = ()=>{
//     const value = useContext(EducationContext);
//     return value
// }

// export const EducationProvider = ({children})=>{
//     const [educationdata, setEducationdata] = useState({
//         institute:"",
//         qualification: "",
//         subject:"",
//         startgraduyear:null,
//         startgradumonth: null,
//         endgraduyear:null,
//         endgradumonth: null

//     });

//     const handleOnChange = (index, e) => {
//         const updatedEducationData = [...educationdata];
//         updatedEducationData[index] = {
//             ...updatedEducationData[index],
//             [e.target.name]: e.target.value,
//         };
//         setEducationdata(updatedEducationData);
//     };

//     useEffect(()=>{
//         setEducationdata(educationdata)
//     },[educationdata])

//     const handleEdusubmit = async ()=>{
//         try {
//             const token = localStorage.getItem("token");
//             const {institute,
//                 qualification,
//                 subject,
//                 startgraduyear,
//                 startgradumonth,
//                 endgraduyear,
//                 endgradumonth} = educationdata;
//             const response = await axios.post("/education/create-details",
//                 {institute,qualification,subject,startgraduyear,
//                     startgradumonth,endgraduyear,endgradumonth
//                 },
//                 {headers:{
//                     "Authorization": `Bearer ${token}`
//                 }});
//                 if(response.status === 200){
//                     toast.success("education details updated!!");
//                     setEducationdata({institute:"",
//                         qualification:"",
//                         subject:"",
//                         startgraduyear: null,
//                         startgradumonth: null,
//                         endgraduyear: null,
//                         endgradumonth: null
//                     });
//                 }else{
//                     toast.error(response.data.message);
//                 }
//         } catch (error) {
//             console.log("error in creating the education", error)
//         }
//     }
//     return(
//         <EducationContext.Provider value={{educationdata, handleOnChange,handleEdusubmit}}>
//             {children}
//         </EducationContext.Provider>
//     )
// }

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
