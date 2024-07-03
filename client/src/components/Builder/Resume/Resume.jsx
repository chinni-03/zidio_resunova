import React from "react";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards";
import { usePersonal } from "../../../context/resumeContext/personal_details";
import { useResume } from "../../../context/ResumeDowload";

export default function Resume({ resumeDetails }) {
    const { getPersonaldata } = usePersonal();
    const personalData = resumeDetails || getPersonaldata || {};
    const {pdfRef} = useResume();

    return (
        <>
            <div className="res">
                <div className="res-child" ref={pdfRef}>
                    <p className="fname">{personalData.username || "Mira Karlson"}</p>
                    <hr className="hr-mira" />
                    <p className="des">{personalData.designation || "Social media marketing specialist"}</p>
                    <hr className="hr-mira" />
                    <div className="res-content">
                        <div className="left-col">
                            <Contact resumeDetails={personalData} />
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
