import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FeedbackContext = createContext();

export const useFeedback = ()=>{
    const value = useContext(FeedbackContext);
    return value 
}

export const FeedbackProvider = ({children})=>{
    const [feedbackdata, setFeedbackdata] = useState({name: "", email:"", feedback:""});
    const navigate = useNavigate();
    const handleFeedback = async () => {
        try {
            const { name, email, feedback } = feedbackdata;
            if (name === "" || email === "" || feedback === "") {
                toast.error("Input sections should not be empty!!");
                return;
            }
    
            const response = await axios.post("/feedback/create", { name, email, feedback });
    
            if (response.status === 200) {
                toast.success("Your feedback submitted!");
                setFeedbackdata({ name: "", email: "", feedback: "" });
                navigate("/feedback-submitted");
            } else if (response.status === 400) {
                console.log(response.data.message);
                toast.error(response.data.message || "Failed to submit feedback");
            } else {
                console.error("Unexpected response status:", response.status);
                toast.error("Unexpected error occurred. Please try again.");
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request canceled:", error.message);
            } else if (axios.isAxiosError(error)) {
                console.error("Axios error:", error.message);
                toast.error("Network error. Please try again later.");
            } else {
                console.error("An unexpected error occurred:", error);
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
    };
    
    return(
    <FeedbackContext.Provider value={{feedbackdata, setFeedbackdata, handleFeedback}}>
            {children}
        </FeedbackContext.Provider>
        )

}