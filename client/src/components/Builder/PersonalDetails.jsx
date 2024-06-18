import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume2 from "./Resume2/Resume2";
import Resume from "./Resume/Resume";
import { useParams } from "react-router-dom";
import { usePersonal } from "../../context/resumeContext/personal_details";
import GetStartedBtn from "../homepage/GetStartedBtn";

export default function PersonalDetails() {
    const {handleOnChange, formData,handlePersonalsignup} = usePersonal();
    const [resumeDetails, setResumeDetails] = useState({
        username:"", 
        useremail:"",
        phone:"",
        designation:"",
        portfolio:"",
        github:"",
        linkedin:""
    });

    useEffect(() => {
        document.title = "Resume Builder";
        setResumeDetails(formData)
    },[formData])

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
    }

    const selectedResume = useParams();

    const render = () => {
        if(selectedResume.resumeType === "resume") {
            return <Resume resumeDetails={resumeDetails} />
        } else if (selectedResume.resumeType === "resume2") {
            return <Resume2 resumeDetails={resumeDetails} />
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
                        <input className="resume-input" 
                        type={isLinkField ? 'url' : 'text'} id={key} name={key}
                        value={formData[key]}
                        onChange={handleOnChange}
                        placeholder={details[key]} />
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