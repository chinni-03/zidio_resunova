import {createContext, useContext, useState} from "react";
import {toast} from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormContext = createContext();

export const useForm = ()=>{
    const value = useContext(FormContext);
    return value
}

export const FormProvider = ({children})=>{
    const navigate = useNavigate()
    const [userdata, setUserData] = useState({name: "", email: "", password: ""});
    const [usersignIn, setUsersignIn] = useState({email: "", password: ""})

    const handleSignUp = async ()=>{
        try {
            const {name, email, password} = userdata;
            if(name === "" || email === "" || password === ""){
                toast.warn("enter the valid details!")
                return;
            }
            const response = await axios.post("/user/create", {name, email, password});
            if (response.status === 200){
                toast.success("User registered successfully!!");
                setUserData({name: "", email: "", password: ""});
                navigate("/")
            }else if(response.status === 400) {
                toast.warn(response.data.message);
            } else if(response.status === 401) {
                toast.warn(response.data.message);
            } else if(response.status === 402) {
                toast.warn(response.data.message);
            }

             
        } catch (error) {
            if(error.response && error.response.data) {
                // Display the error message from the server response
                toast.error(error.response.data.message);
            } else {
                // Handle other types of errors (e.g., network issues)
                toast.error("An error occurred during registration. Please try again.");
            }
        }
    }

    const handleSignIn = async ()=>{
        try {
            const {email, password} = usersignIn;
            if (email === "" || password === ""){
                toast.warn("input section should noty be empty!!")
            }
            const response = await axios.post("/user/signin", {email,password});
            if(response.status === 200){
                localStorage.setItem("token", response.data.token);
                navigate("/")
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            if(error.response && error.response.data) {
                // Display the error message from the server response
                toast.error(error.response.data.message);
            } else {
                // Handle other types of errors (e.g., network issues)
                toast.error("An error occurred during registration. Please try again.");
            }
        }
    }

    return(
        <FormContext.Provider value={{userdata, setUserData, handleSignUp,usersignIn, setUsersignIn, handleSignIn}}>
            {children}
        </FormContext.Provider>
    )
}