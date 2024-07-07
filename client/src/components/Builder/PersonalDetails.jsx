import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume2 from "./Resume2/Resume2";
import Resume from "./Resume/Resume";
import { Link, useParams } from "react-router-dom";
import { usePersonal } from "../../context/resumeContext/personal_details";
import GetStartedBtn from "../homepage/GetStartedBtn";
import RoundBtn from "../RoundBtn";
import { ToastContainer } from "react-toastify";

export default function PersonalDetails() {
    const { handleOnChange, formData, } = usePersonal();
    const { resumeType } = useParams();

    useEffect(() => {
        document.title = "Resume Builder";
    }, []);

    const details = {
        title: "Personal Details",
        username: "Enter your full name",
        phone: "Enter your phone number",
        designation: "Enter your designation",
        portfolio: "Add portfolio link",
        useremail: "Enter email address",
        subtitle: "Additional Details",
        github: "Github Profile",
        linkedin: "LinkedIn Profile"
    };

    const render = () => {
        if (resumeType === "resume") {
            return <Resume resumeDetails={formData} />;
        } else if (resumeType === "resume2") {
            return <Resume2 resumeDetails={formData} />;
        }
    };

    return (
        <>
            <Nav />
            <div className="main-page">
                <div className="fillers">
                    <Panel page="personal" resume={resumeType} />
                    <div className="form">
                        {Object.keys(details).map((key, index) => {
                            if (key === 'title' || key === 'subtitle') {
                                if (key === 'subtitle') {
                                    return <p className="subtitle" key={index}>{details[key]}</p>;
                                }
                                return <p className="title" key={index}>{details[key]}</p>;
                            }

                            const isLinkField = key === 'portfolio' || key === 'github' || key === 'linkedin';

                            return (
                                <div key={index} className="inputs">
                                    <label htmlFor={key} className="resume-label">{details[key]}</label>
                                    <input className="resume-input"
                                        type={isLinkField ? 'url' : 'text'} id={key} name={key}
                                        value={formData[key] || ''}
                                        onChange={handleOnChange} />
                                </div>
                            );
                        })}
                        <div className="btns">
                            <Link className="w-50" type="button" to={`/education-details/${resumeType}`}>
                                <GetStartedBtn extraClass="add align-left w-50" btn="Next" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="res-parent">
                    {render()}
                </div>
                <RoundBtn />
                <ToastContainer />
            </div>
        </>
    );
}