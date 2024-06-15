import React from "react";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Profile from "./Profile";
import Experience from "./Experience";

export default function Resume(details) {
    return(
        <>
        <div className="res">
            <div className="res-child">
                <p className="username">Mira Karlson</p>
                <hr className="hr-mira" />
                <p className="des">Social media marketing specialist</p>
                <hr className="hr-mira" />
                <div className="res-content">
                    <div className="left-col">
                        <Contact />
                        <Skills />
                        <Education />
                    </div>
                    <div className="right-col">
                        <Profile />
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}