import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume2 from "./Resume2/Resume2";
import Resume from "./Resume/Resume";
import { useParams } from "react-router-dom";

export default function PersonalDetails() {

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const details = {
        title: "Personal Details",
        fname: "Enter your full name",
        phone: "Enter your phone number",
        designation: "Enter your designation",
        portfolio: "Add portfolio link",
        email: "Enter email address",
        subtitle: "Additional Details",
        ghub: "Github Profile",
        linkedin: "LinkedIn Profile"
    }

    const selectedResume = useParams();

    const render = () => {
        console.log(selectedResume);
        console.log(selectedResume.resumeType);
        if(selectedResume.resumeType === "resume") {
            return <Resume />
        } else if (selectedResume.resumeType === "resume2") {
            return <Resume2 />
        }
    }

    return (
        <>
        <Nav />
        <div className="main-page">
            <div className="fillers">
                <Panel page="personal" />
                {/* <CustomForm details={
                    {
                        title: "Personal Details",
                        fname: "Enter your full name",
                        phone: "Enter your phone number",
                        designation: "Enter your designation",
                        portfolio: "Add portfolio link",
                        email: "Enter email address",
                        subtitle: "Additional Details",
                        ghub: "Github Profile",
                        linkedin: "LinkedIn Profile"
                    }
                } /> */}
                <div className="form">
                {Object.keys(details).map((key, index) => {
                    if (key === 'title' || key === 'subtitle') {
                        if (key === 'subtitle') {
                            return <p className="subtitle" key={index}>{details[key]}</p>;
                        }
                        return <p className="title" key={index}>{details[key]}</p>;
                    }
                    
                    const isLinkField = key === 'portfolio' || key === 'ghub' || key === 'linkedin';

                    return (
                        <div key={index} className="inputs">
                        <label htmlFor={key} className="resume-label">{details[key]}</label>
                        <input className="resume-input" type={isLinkField ? 'url' : 'text'} id={key} name={key} placeholder={details[key]} />
                        </div>
                    );
                    })}
                </div>
            </div>
            <div className="res-parent">
            {render()}
            </div>
        </div>
        </>
    )
}