import React from "react";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards";

export default function Resume({resumeDetails}) {
    return(
        <>
        <div className="res">
            <div className="res-child">
                <p className="fname">{resumeDetails?.username || "Mira Karlson"}</p>
                <hr className="hr-mira" />
                <p className="des">{resumeDetails?.designation || "Social media marketing specialist"}</p>
                <hr className="hr-mira" />
                <div className="res-content">
                    <div className="left-col">
                        <Contact resumeDetails={resumeDetails} />
                        <Skills />
                        <Education />
                        <Awards />
                    </div>
                    <div className="right-col">
                        <Experience />
                        <Projects />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}