import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const PersonalContext = createContext();
export const usePersonal = () => {
    const value = useContext(PersonalContext);
    return value;
};

export const PersonalProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        designation: "",
        portfolio: "",
        useremail: "",
        github: "",
        linkedin: ""
    });

    const [getPersonaldata, setGetPersonalData] = useState(null);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePersonalsignup = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post("/personal/create-details",
                formData,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
            if (response.status === 200) {
                console.log("hadsgf", formData)
                toast.success("Your personal details entered successfully");
                return true;
            } else {
                toast.error(response.data.message);
                return false;
            }
        } catch (error) {
            console.log("Error in creating personal details", error);
            toast.error("Error in creating personal details");
            return false;
        }
    };

    const fetchData = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`/personal/get-all-user`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setGetPersonalData(response.data.getAllData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
     
            console.log("Error fetching personal details", error);
        }
    };

    const deletePersonal = async ()=>{
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete("/personal/delete-details",{
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

    useEffect(()=>{fetchData()},[])

    return (
        <PersonalContext.Provider value={{ handleOnChange, formData, handlePersonalsignup, fetchData, setFormData, getPersonaldata, deletePersonal }}>
            {children}
        </PersonalContext.Provider>
    );
};
