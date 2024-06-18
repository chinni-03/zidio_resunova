import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";

export default function SkillDetails() {

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const initialdetails = {
        skill: "Skill"
    }

    const [skillinputs, setSkillinputs] = useState([initialdetails]);
    const addmoreSkill = ()=>{
        setSkillinputs([...skillinputs, initialdetails])
    }

    const deleteSkillInputs = (index)=>{
        const updateSkillinputs = [...skillinputs];
        updateSkillinputs.splice(index,1);
        setSkillinputs(updateSkillinputs)
    }

    return (
        <>
        <Nav />
        <div className="main-page">
            <div className="fillers">
                <Panel page="skills" />
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
                    {skillinputs.map((details, index)=>(
                        <div key={index} className="skill-section">
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
                    {index>0 &&
                    (<button type="button" onClick={()=>deleteSkillInputs(index)}>remove</button>)}
                    </div>
                    ))}
                    <button type="button" onClick={addmoreSkill}>
                    <GetStartedBtn extraClass="add" btn="Add more" />
                    </button>
                </div>
            </div>
            <div className="res-parent">
                <Resume />
            </div>
        </div>
        </>
    )
}