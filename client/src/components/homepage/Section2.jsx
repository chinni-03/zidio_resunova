import React from "react";
import resume from '../../assets/images/harshini_resume.png'

function Section2() {
    return(
        <>
        <div className="section2">
            <p className="caption2">Say goodbye to hours of screen time to prepare a resume</p>
            <div className="tilted-templates">
                <div className="row1">
                    <img src={resume} alt="tilt" />
                    <img src={resume} alt="tilt" />
                    <img src={resume} alt="tilt" />
                </div>
                <div className="row1">
                    <img src={resume} alt="tilt" />
                    <img src={resume} alt="tilt" />
                    <img src={resume} alt="tilt" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Section2;