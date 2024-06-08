import React from "react";
import GetStartedBtn from "./GetStartedBtn";

function Section3 () {

    return (
        <>
        <div className="section3">
            <div className="left-tilt">
                <img src="/../../images/harshini_resume.png" alt="tilted-resume" />
            </div>
            <div className="center-text">
                <p>What are you waiting for?</p>
                <GetStartedBtn extraClass="align-center" btn="Let's get started" />
            </div>
            <div className="right-tilt">
                <img src="/../../images/harshini_resume.png" alt="tilted-resume" />
            </div>
        </div>
        </>
    )
}

export default Section3;