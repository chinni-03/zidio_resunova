import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";

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

    const {resumeType} = useParams();

    const render = () => {
        if(resumeType === "resume") {
            return <Resume />
        } else if (resumeType === "resume2") {
            return <Resume2 />
        }
    }

    return (
        <>
        <Nav />
        <div className="main-page">
            <div className="fillers">
                <Panel page="skills" resume={resumeType} />
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
                    (<button type="button" className="w-100" onClick={()=>deleteSkillInputs(index)}>
                        <GetStartedBtn extraClass="add red-btn align-right" btn="Remove" />
                    </button>)}
                    </div>
                    ))}
                    <button type="button" className="w-100" onClick={addmoreSkill}>
                        <GetStartedBtn extraClass="add align-right transparent" btn="Add more" />
                    </button>
                </div>
            </div>
            <div className="res-parent">
                {render()}
            </div>
        </div>
        </>
    )
}