import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const PersonalContext = createContext();
export const usePersonal = ()=>{
    const value = useContext(PersonalContext);
    return value;
}

export const PersonalProvider = ({children})=>{
    const [formData, setFormData] = useState({
        username:"",
        phone:"",
        designation:"",
        portfolio:"",
        useremail:"",
        github:"",
        linkedin:""
    });
    const handleOnChange = (e)=>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handlePersonalsignup = async ()=>{
        try {
            const token = localStorage.getItem("token")
            const {username, useremail,phone,designation,portfolio,github,linkedin} = formData;
            const response = await axios.post("/personal/create-details",
                {username, useremail,phone,designation,portfolio,github,linkedin},
            {headers:{
                "Authorization": `Bearer ${token}`
            }});
            if(response.status === 200){
                toast.success("your personal details entred successfully")
                setFormData({username: "", useremail:"", phone:"", designation:"", portfolio:"",github:"",linkedin:""})
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("getting error in creating personal details", error)
        }
    }
    
    return(
        <PersonalContext.Provider value={{handleOnChange, formData, handlePersonalsignup}}>
            {children}
        </PersonalContext.Provider>
    )
}