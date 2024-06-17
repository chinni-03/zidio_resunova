<<<<<<< HEAD
import React, { useEffect } from "react";
import Nav from "../Builder/Nav";
=======
import React from "react";
>>>>>>> c661061009eb80dd4d82601f0857f856806e0348
import Footer from "../Footer";
import '../Feedback/Feedback2.css';
import checked from '../../assets/images/checked.png';

export default function Feedback2() {

    useEffect(() => {
        document.title = "Feedback Submitted"
    })

    return (
        <>
<<<<<<< HEAD
        <Nav />
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
=======
    <div class="checklogo">
        <img src={checked} class="clogo" alt=""/>
    </div>
    <div class="smalltext">
        <p id="greenS">Your feedback has been submitted!</p>
    </div>
    <div class="bigtext1">
        <p id="greenB">Thank you for dropping your</p>
    </div>
    <div class="bigtext2">
        <p id="greenB">feedback! It’s great to hear from you!</p>
>>>>>>> c661061009eb80dd4d82601f0857f856806e0348
    </div>
    <Footer />
        </>
    )
}