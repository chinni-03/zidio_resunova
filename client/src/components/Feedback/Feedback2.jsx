import React, { useEffect } from "react";
import Nav from "../Builder/Nav";
import Footer from "../Footer";
import '../Feedback/Feedback2.css';
import checked from '../../assets/images/checked.png';
import Navbar from "../Navbar";

export default function Feedback2() {

    useEffect(() => {
        document.title = "Feedback Submitted"
    })

    return (
        <>
        <Navbar/>
    <div className="feed-2">
        <div class="checklogo">
            <img src={checked} class="clogo" alt=""/>
        </div>
        <div class="smalltext">
            <p id="greenS">Your feedback has been submitted!</p>
        </div>
        <div class="bigtext1">
            <p id="greenB">Thank you for dropping your feedback!</p>
        </div>
        <div class="bigtext2">
            <p id="greenB">It’s great to hear from you!</p>
        </div>
    </div>
    <Footer />
        </>
    )
}