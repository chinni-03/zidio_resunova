import React from "react";
import Nav from '../Builder/Nav';
import Footer from '../Footer';
import '../Feedback/Feedback1.css';
import { Link } from "react-router-dom";
export default function Feedback1() {
    return (
        <>
        <Nav />
    <div class="heading2">Hey! It’s great to see that you’ve got some feedback for us!</div>
    <div className="feedback-page">
    <div class="infocol">
        <div class="name">
            <p id="log">Name</p>
            <div class="input-box">
                <input placeholder="Enter Your Full Name" id="typing"/>
            </div>
        </div>
        <div class="email">
            <p id="log">Email</p>
            <div class="input-box">
                <input placeholder="Enter Your Email Address" id="typing"/>
            </div>
        </div>
        <div class="FeedBack">
            <p id="log">FeedBack</p>
            <div class="input-box">
                <input placeholder="Enter Your feedback and suggestions here" id="typing"/>
            </div>
        </div>
        </div>
    <Link to={'/feedback-submitted'}><button class="button">
        <p id="drop">Drop in my feedback</p>
    </button></Link>
    </div>
    <Footer />
        </>
    )
}