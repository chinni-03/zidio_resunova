import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import RoundBtn from "../RoundBtn";
import { useProject } from "../../context/resumeContext/projectdetails";

export default function ProjectDetails() {
    const {handleOnChange, handleSubmitProject, projectData} = useProject();

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const initialdetails = {
        title: "Project Details",
        company: "Project Institue",
        startyear: "Start year",
        startmonth: "Start month",
        endyear: "End year",
        endmonth: "End month",
        decription: "Description"
    }

    const [proinputs, setProInputs] = useState([initialdetails]);

    const addProSection = ()=>{
        setProInputs([...proinputs, initialdetails])
    }

    const deleteProSection = (index)=>{
        const updateSection = [...proinputs];
        updateSection.splice(index,1);
        setProInputs(updateSection)
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
                <Panel page="projects" resume={resumeType} />
                <div className="form">
                    {proinputs.map((details,index)=>(
                        <div key={index} className="experience-section">
                {Object.keys(details).map((key, idx) => {
                    if (key === 'title' || key === 'subtitle') {
                        if (key === 'subtitle') {
                            return <p className="subtitle" key={idx}>{details[key]}</p>;
                        }
                        return <p className="title" key={idx}>{details[key]}</p>;
                    }
                    
                    const isLinkField = key === 'startyear' || key === 'startmonth' || key === 'endmonth' || key === 'endyear';

                    return (
                        <div key={idx} className="inputs">
                        <label htmlFor={key} className="resume-label">{details[key]}</label>
                        <input className="resume-input" 
                        value={projectData[index]?projectData[index][key]:""}
                        onChange={(e)=>handleOnChange(index, e)}
                        type={isLinkField ? 'number' : 'text'} 
                        id={key} name={key} />
                        </div>
                    );
                    })}
                    {index>0 && (<button type="button" className="w-100" onClick={()=>deleteProSection(index)}>
                            <GetStartedBtn extraClass="add align-right red-btn" btn="Remove" />
                        </button>)}
                     </div>
                    ))}
                    <div className="btns">
                        <button type="button" className="w-50">
                            <GetStartedBtn extraClass="add align-left w-50" btn="Save" />
                        </button>
                        <button type="button" className="w-50" onClick={addProSection}>
                            <GetStartedBtn extraClass="add align-right w-50 transparent" btn="Add more" />
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