import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardContext = createContext();

export const useDashboard = () => {
    const value = useContext(DashboardContext);
    return value;
};

export const DashboardProvider = ({ children }) => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [updateDetails, setUpdateDetails] = useState({ email: "", password: "", cpassword: "" });

    const loggedIn = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`/user/user-data`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                const userData = response.data.user;
                setData(userData);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                console.log(error);
            } else {
                console.error("An error occurred during getting the data. Please try again.");
            }
        }
    };

    const checkTokenExpiry = () => {
        const token = localStorage.getItem("token");
        const tokenExp = localStorage.getItem("time");

        if (token && tokenExp) {
            const currentTime = Date.now() / 1000; // Current time in seconds
            if (currentTime > tokenExp) {
                localStorage.removeItem("token");
                localStorage.removeItem("time");
                navigate("/signin");
            }
        } else {
            navigate("/signin");
        }
    };

    const handleLoggedout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        navigate("/signin");
    };

    const handleSetPassword = async () => {
        try {
            const { email, password, cpassword } = updateDetails;
            const token = localStorage.getItem("token");
            const response = await axios.patch('/user/update', { email, password, cpassword }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                toast.success("Your password updated successfully!");
                setUpdateDetails({ email: "", password: "", cpassword: "" });
                navigate("/signin");
            }
        } catch (error) {
            console.error("Error in handleSetPassword:", error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <DashboardContext.Provider value={{ data, loggedIn, checkTokenExpiry, handleLoggedout, updateDetails, setUpdateDetails, handleSetPassword }}>
            {children}
        </DashboardContext.Provider>
    );
};
