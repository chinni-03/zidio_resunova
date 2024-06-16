import React from "react";
import { Link } from "react-router-dom";
import GetStartedBtn from "./GetStartedBtn";
import resume from '../../assets/images/harshini_resume.png'

function LandingPage() {
    return(
        <>
        <div className="landing-page">
            <img src={resume} alt="resume" />
            <div className="punchline">
                <p>Let's get your resume done in minutes with pre-built templates!</p>
                <Link to={'/signup'}><GetStartedBtn extraClass="align-right" btn="Get Started" /></Link>
            </div>
        </div>
        </>
    )
}

export default LandingPage;