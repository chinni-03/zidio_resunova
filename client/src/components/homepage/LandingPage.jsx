import React from "react";
import GetStartedBtn from "./GetStartedBtn";

function LandingPage() {
    return(
        <>
        <div className="landing-page">
            <img src="/../../images/harshini_resume.png" alt="resume" />
            <div className="punchline">
                <p>Let's get your resume done in minutes with pre-built templates!</p>
                <GetStartedBtn extraClass="align-right" btn="Get Started" />
            </div>
        </div>
        </>
    )
}

export default LandingPage;