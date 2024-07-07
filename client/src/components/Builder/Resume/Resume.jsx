import React from "react";
import Contact from "./contact/Contact";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Awards from "./Awards/Awards";
import { usePersonal } from "../../../context/resumeContext/personal_details";
import { useResume } from "../../../context/ResumeDowload";

export default function Resume({ resumeDetails }) {
    const { getPersonaldata } = usePersonal();

    return (
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
    );
}
