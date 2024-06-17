<<<<<<< HEAD
import React, { useEffect } from "react";
import Nav from '../Builder/Nav';
=======
import React from "react";
>>>>>>> c661061009eb80dd4d82601f0857f856806e0348
import Footer from '../Footer';
import '../Feedback/Feedback1.css';
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useFeedback } from "../../context/feedback";
import { ToastContainer } from "react-toastify";
export default function Feedback1() {
<<<<<<< HEAD

    useEffect(() => {
        document.title = "Feedback";
    })

=======
    const {feedbackdata, setFeedbackdata, handleFeedback} = useFeedback();
>>>>>>> c661061009eb80dd4d82601f0857f856806e0348
    return (
        <>
        <div className="feedback-page">
            <div class="heading2">Hey! It’s great to see that you’ve got some feedback for us!</div>
                <div class="infocol">
                    <div class="feedback-section">
                        <p id="log">Name</p>
                        <div class="input-box">
                            <input type="text" 
                            name="name"
                            value={feedbackdata.name} 
                            onChange={(e)=>setFeedbackdata({...feedbackdata, name: e.target.value})}
                            placeholder="Enter Your Full Name" id="typing"/>
                        </div>
                    </div>
                    <div class="feedback-section">
                        <p id="log">Email</p>
                        <div class="input-box">
                            <input type="email"
                            name="email"
                            value={feedbackdata.email} 
                            onChange={(e)=>setFeedbackdata({...feedbackdata, email: e.target.value})}
                            placeholder="Enter Your Email Address" id="typing"/>
                        </div>
                    </div>
                    <div class="feedback-section">
                        <p id="log">Feedback</p>
                        <div class="input-box">
                            <input type="text"
                            name="feedback"
                            value={feedbackdata.feedback}
                            onChange={(e)=>setFeedbackdata({...feedbackdata, feedback: e.target.value})} 
                            placeholder="Enter Your feedback and suggestions here" id="typing"/>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={handleFeedback} className="w-30"><GetStartedBtn extraClass="w-100" btn="Drop in my feedback" /></button>
            </div>
            <ToastContainer/>
        <Footer />
        </>
    )
}