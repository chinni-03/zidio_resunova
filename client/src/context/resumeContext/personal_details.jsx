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

    const handlePersonalsignup = async (formData) => {
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
            toast.error("An error occurred while fetching the details");
            console.log("Error fetching personal details", error);
        }
    };

    useEffect(()=>{fetchData()},[getPersonaldata])

    return (
        <PersonalContext.Provider value={{ handleOnChange, formData, handlePersonalsignup, fetchData, setFormData, getPersonaldata }}>
            {children}
        </PersonalContext.Provider>
    );
};
