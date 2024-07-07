import React from "react";
import Contact2 from "../Resume2/Contact2/Contact2";
import Skills2 from "../Resume2/skill2/Skills2";
import Education2 from "../Resume2/Education2/Education2";
import Experience2 from "../Resume2/Experience2/Experience2";
import Projects2 from "../Resume2/Project2/Projects2";
import Awards2 from "./Awards2/Awards2";

export default function Resume2({resumeDetails}) {
    return(
        <>
        <div className="res res2">
            <div className="res-child">
                <div className="color-name">
                    <p className="fname">{resumeDetails?.username||"Mira Karlson"}</p>
                    <hr className="hr-mira" />
                    <p className="des">{resumeDetails?.designation||"Social media marketing specialist"}</p>
                    <hr className="hr-mira" />
                </div>
                <div className="res-content">
                    <div className="left-col">
                        <Contact2 resumeDetails={resumeDetails} />
                        <Skills2 />
                        <Education2 />
                        <Awards2 />
                    </div>
                    <div className="right-col">
                        <Experience2 />
                        <Projects2 />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}