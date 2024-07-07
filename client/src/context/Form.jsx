import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const FormContext = createContext();

export const useForm = () => {
    const value = useContext(FormContext);

    return value
}

export const FormProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userdata, setUserData] = useState({ name: "", email: "", password: "" });
    const [usersignIn, setUsersignIn] = useState({ email: "", password: "" });
    const [visible, setVisible] = useState(false)

    const handleSignUp = async () => {
        try {
            const { name, email, password } = userdata;
            if (name === "" || email === "" || password === "") {
                toast.warn("enter the valid details!")
                return;
            }
            const response = await axios.post("/user/create", { name, email, password });
            if (response.status === 200) {
                toast.success("User registered successfully!");
                setUserData({ name: "", email: "", password: "" });
                navigate("/signin");
            } else if (response.status === 400) {
                toast.warn(response.data.message);
            } else if (response.status === 401) {
                toast.warn(response.data.message);
            } else if (response.status === 402) {
                toast.warn(response.data.message);
            }


        } catch (error) {
            if (error.response && error.response.data) {
                // Display the error message from the server response
                toast.error(error.response.data.message);
            } else {
                // Handle other types of errors (e.g., network issues)
                toast.error("An error occurred during registration. Please try again.");
            }
        }
    }

    const handleSignIn = async () => {
        try {
            const { email, password } = usersignIn;
            if (email === "" || password === "") {
                toast.warn("input section should not be empty!!");
                return;
            }
            const response = await axios.post("/user/signin", { email, password });
            if (response.status === 200) {
                const token = response.data.token
                localStorage.setItem("token", token);
                const decodedToken = jwtDecode(token);
                localStorage.setItem("time", decodedToken.exp)
                navigate(`/dashboard`)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            if (error.response && error.response.data) {
                // Display the error message from the server response
                toast.error(error.response.data.message);
            } else {
                // Handle other types of errors (e.g., network issues)
                toast.error("An error occurred during registration. Please try again.");
            }
        }
    }

    const handleVisibility = ()=>{
        setVisible(visible=> !visible)
    }

    return (
        <FormContext.Provider value={{
            userdata, setUserData, handleSignUp, usersignIn,
            setUsersignIn, handleSignIn, handleVisibility, visible
        }}>
            {children}
        </FormContext.Provider>
    )
}