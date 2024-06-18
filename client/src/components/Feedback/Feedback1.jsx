import React, { useEffect } from "react";
import Nav from '../Builder/Nav';
import Footer from '../Footer';
import '../Feedback/Feedback1.css';
import { Link } from "react-router-dom";
import GetStartedBtn from "../homepage/GetStartedBtn";
import Navbar from "../Navbar";
export default function Feedback1() {

    useEffect(() => {
        document.title = "Feedback";
    })

    return (
        <>
        <Navbar/>
        <div className="feedback-page">
            <div class="heading2">Hey! It’s great to see that you’ve got some feedback for us!</div>
                <div class="infocol">
                    <div class="feedback-section">
                        <p id="log">Name</p>
                        <div class="input-box">
                            <input placeholder="Enter Your Full Name" id="typing"/>
                        </div>
                    </div>
                    <div class="feedback-section">
                        <p id="log">Email</p>
                        <div class="input-box">
                            <input placeholder="Enter Your Email Address" id="typing"/>
                        </div>
                    </div>
                    <div class="feedback-section">
                        <p id="log">Feedback</p>
                        <div class="input-box">
                            <input placeholder="Enter Your feedback and suggestions here" id="typing"/>
                        </div>
                    </div>
                </div>
                <Link to={'/feedback-submitted'} className="w-30"><GetStartedBtn extraClass="w-100" btn="Drop in my feedback" /></Link>
            </div>
        <Footer />
        </>
    )
}