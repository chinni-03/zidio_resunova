import React from "react";
import Contact2 from "../Resume2/Contact2";
import Skills2 from "../Resume2/Skills2";
import Education2 from "../Resume2/Education2";
import Summary2 from "../Resume2/Summary2";
import Experience2 from "../Resume2/Experience2";

export default function Resume2() {
    return(
        <>
        <div className="res res2">
            <div className="res-child">
                <div className="color-name">
                    <p className="username">Mira Karlson</p>
                    <hr className="hr-mira" />
                    <p className="des">Social media marketing specialist</p>
                    <hr className="hr-mira" />
                </div>
                <div className="res-content">
                    <div className="left-col">
                        <Contact2 />
                        <Skills2 />
                        <Education2 />
                    </div>
                    <div className="right-col">
                        {/* <Summary2 /> */}
                        <Experience2 />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}