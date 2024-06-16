import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import GetStartedBtn from "../homepage/GetStartedBtn";
import Resume from "./Resume";

export default function EduDetails() {

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const details = {
        title: "Education Details",
        institute: "Institute name",
        quali: "Qualification",
        sub: "Subject",
        startYear: "Start year",
        startMonth: "Start month",
        endYear: "End year",
        endMonth: "End month",
    }

    return (
        <>
        <Nav />
        <div className="main-page">
            <div className="fillers">
                <Panel page="edu" />
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
                    <GetStartedBtn extraClass="add" btn="Add more" />
                </div>
            </div>
            <div className="res-parent">
                <Resume />
            </div>
        </div>
        </>
    )
}