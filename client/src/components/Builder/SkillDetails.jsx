import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import RoundBtn from "../RoundBtn";
import { useSkill } from "../../context/resumeContext/skilldetail";

export default function SkillDetails() {
    const {skillData, handleOnChange, handleSubmitData} = useSkill();

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
                {Object.keys(details).map((key, idx) => {
                    if (key === 'title' || key === 'subtitle') {
                        if (key === 'subtitle') {
                            return <p className="subtitle" key={idx}>{details[key]}</p>;
                        }
                        return <p className="title" key={idx}>{details[key]}</p>;
                    }
                

                    return (
                        <div key={idx} className="inputs">
                        <label htmlFor={key} className="resume-label">{details[key]}</label>
                        <input className="resume-input" 
                        value={skillData[index]? skillData[index][key]:""}
                        onChange={(e)=>handleOnChange(index,e)}
                        type="text" id="skill" name="skill" />
                        </div>
                    );
                    })}
                    {index>0 &&
                    (<button type="button" className="w-100" onClick={()=>deleteSkillInputs(index)}>
                        <GetStartedBtn extraClass="add red-btn align-right" btn="Remove" />
                    </button>)}
                    </div>
                    ))}
                    <div className="btns">
                        <button type="button" className="w-50">
                            <GetStartedBtn extraClass="add w-50 align-left" btn="Save" />
                        </button>
                        <button type="button" className="w-50" onClick={addmoreSkill}>
                            <GetStartedBtn extraClass="add w-50 align-right transparent" btn="Add more" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="res-parent">
                {render()}
            </div>
            <RoundBtn />
        </div>
        </>
    )
}