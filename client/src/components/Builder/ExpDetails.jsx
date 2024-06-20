import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import { useExperience } from "../../context/resumeContext/experience_details";
import RoundBtn from '../RoundBtn';

export default function ExpDetails() {
    const {handleOnchange,experienceData,handlesubmitExe} = useExperience();

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const initialdetails = {
        title: "Experience Details",
        companyname: "Company name",
        position: "Designation",
        startyear: "Start year",
        startmonth: "Start month",
        endyear: "End year",
        endmonth: "End month",
    }

    const [expinputs, setExpInputs] = useState([initialdetails]);

    const addExpSection = () => {
        setExpInputs([...expinputs, initialdetails])
    }

    const deleteExpSection = (index) => {
        const updateSection = [...expinputs];
        updateSection.splice(index, 1);
        setExpInputs(updateSection)
    }

    const { resumeType } = useParams();

    const render = () => {
        if (resumeType === "resume") {
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
                    <Panel page="exp" resume={resumeType} />
                    <div className="form">
                        {expinputs.map((details, index) => (
                            <div key={index} className="experience-section">
                                {Object.keys(details).map((key, idx) => {
                                    if (key === 'title' || key === 'subtitle') {
                                        if (key === 'subtitle') {
                                            return <p className="subtitle" key={idx}>{details[key]}</p>;
                                        }
                                        return <p className="title" key={idx}>{details[key]}</p>;
                                    }

                                    const isLinkField = key === 'startyear' || key === 'startmonth' || key === 'endyear'
                                    || key === 'endmonth';

                                    return (
                                        <div key={idx} className="inputs">
                                            <label htmlFor={key} className="resume-label">{details[key]}</label>
                                            <input className="resume-input" 
                                            type={isLinkField ? 'number' : 'text'}
                                            value={experienceData[index] ? experienceData[index][key]: ""}
                                            onChange={(e)=>handleOnchange(index, e)}
                                            id={key} name={key} placeholder={details[key]} />
                                        </div>
                                    );
                                })}
                                {index > 0 && (<button type="button" className="w-100" onClick={() => deleteExpSection(index)}>
                                    <GetStartedBtn extraClass="add red-btn align-right" btn="Remove" />
                                </button>)}
                            </div>
                        ))}
                        <div className="btns w-100">
                            <button type="button" className="w-100" onClick={addExpSection}>
                                <GetStartedBtn extraClass="add align-right transparent" btn="Add more" />
                            </button>
                        </div>
                    );
                    })}
                    {index>0 && (<button type="button" className="w-100" onClick={()=>deleteExpSection(index)}>
                        <GetStartedBtn extraClass="add red-btn align-right" btn="Remove" />
                    </button>)}
                     </div>
                    ))}
                    <div className="btns">
                        <button className="w-50" type="button">
                            <GetStartedBtn extraClass="add align-left w-50" btn="Save" />
                        </button>
                        <button type="button" className="w-50" onClick={addExpSection}>
                            <GetStartedBtn extraClass="add align-right w-50 transparent" btn="Add more" />
                        </button>
                    </div>
                </div>
                <div className="res-parent">
                    {render()}
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