import React from "react";
import { Link } from "react-router-dom";
import GetStartedBtn from "./GetStartedBtn";
import resume from '../../assets/images/harshini_resume.png'

function Section3 () {

    return (
        <>
        <div className="section3">
            <div className="left-tilt">
                <img src={resume} alt="tilted-resume" />
            </div>
            <div className="center-text">
                <p>What are you waiting for?</p>
                <Link to={'/signup'}><GetStartedBtn extraClass="align-center" btn="Let's get started" /></Link>
            </div>
            <div className="right-tilt">
                <img src={resume} alt="tilted-resume" />
            </div>
        </div>
        </>
    )
}

export default Section3;