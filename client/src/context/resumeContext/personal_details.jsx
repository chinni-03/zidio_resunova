import { createContext, useContext, useState } from "react";

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
    
    return(
        <PersonalContext.Provider value={{handleOnChange}}>
            {children}
        </PersonalContext.Provider>
    )
}