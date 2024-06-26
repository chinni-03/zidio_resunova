import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardContext = createContext();

export const useDashboard = ()=>{
    const value = useContext(DashboardContext);
    return value
}

export const DashboardProvider = ({children})=>{
    const navigate = useNavigate();
    const [data, setData] = useState(null);

        const loggedIn = async ()=>{
            try {
                const token = localStorage.getItem("token")
                const response = await axios.get(`/user/user-data`,{
                    headers:{
                        "Authorization": `Bearer ${token}`
                    }
            })
                if(response.status === 200){
                    const userData = response.data.user;
                    console.log("here is the user data",userData)
                    setData(userData)
                }else{
                    console.log(response.data.message)
                }
            } catch (error) {
                if(error.response && error.response.data) {
                    // Display the error message from the server response
                    console.log(error)
                } else {
                    // Handle other types of errors (e.g., network issues)
                    console.error("An error occurred during getting the data. Please try again.");
                }
            }
        }
     // Only fetch data if data is null (to prevent infinite loop
     const checkTokenExpiry = () => {
        const token = localStorage.getItem("token");
        const tokenExp = localStorage.getItem("time");

        if (token && tokenExp) {
            const currentTime = Date.now() / 1000; // Current time in seconds
            if (currentTime > tokenExp) {
                // Token has expired
                localStorage.removeItem("token");
                localStorage.removeItem("time");
                navigate("/signin");
            }
        } else {
            // Token or token expiry time not found, redirect to sign-in
            navigate("/signin");
        }
    }

    function handleLoggedout(){
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        navigate("/signin")
    }
    
    return(
        <DashboardContext.Provider value={{data, loggedIn, checkTokenExpiry,handleLoggedout}}>
            {children}
        </DashboardContext.Provider>
    )
}