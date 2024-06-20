
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import GetStartedBtn from "../homepage/GetStartedBtn";
import Resume from "./Resume/Resume";
import { useEducation } from "../../context/resumeContext/education_details";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import RoundBtn from "../RoundBtn";

export default function EduDetails() {
    const { educationdata, handleOnChange, handleEdusubmit } = useEducation();

    useEffect(() => {
        document.title = "Resume Builder";
    }, []);

    const initialdetails = {
        title: "Education Details",
        institute: "Institute name",
        qualification: "Qualification",
        subject: "Subject",
        startgraduyear: "Start year",
        startgradumonth: "Start month",
        endgraduyear: "End year",
        endgradumonth: "End month",
    };

    const [educationinputs, setEducationinputs] = useState([initialdetails]);

    const addMoreSections = () => {
        setEducationinputs([...educationinputs, initialdetails]);
    };

    const deleteSections = (index) => {
        const updatedSections = [...educationinputs];
        updatedSections.splice(index, 1);
        setEducationinputs(updatedSections);
    };

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
                    <Panel page="edu" resume={resumeType} />
                    <div className="form">
                        {educationinputs.map((details, index) => (
                            <div key={index} className="education-section">
                                {Object.keys(details).map((key, idx) => {
                                    if (key === 'title' || key === 'subtitle') {
                                        if (key === 'subtitle') {
                                            return <p className="subtitle" key={idx}>{details[key]}</p>;
                                        }
                                        return <p className="title" key={idx}>{details[key]}</p>;
                                    }

                                    const isLinkField = key === 'startgraduyear' || key === 'startgradumonth' || key === 'endgraduyear' || key === 'endgradumonth';

                                    return (
                                        <div key={idx} className="inputs">
                                            <label htmlFor={key} className="resume-label">{details[key]}</label>
                                            <input
                                                className="resume-input"
                                                type={isLinkField ? 'number' : 'text'}
                                                value={educationdata[index] ? educationdata[index][key] : ''}
                                                onChange={(e) => handleOnChange(index, e)}
                                                id={key}
                                                name={key}
                                                placeholder={details[key]}
                                            />
                                        </div>
                                    );
                                })}
                                {index > 0 && (
                                    <button type="button" className="w-100" onClick={() => deleteSections(index)}>
                                        <GetStartedBtn extraClass="add red-btn align-right" btn="Remove" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <div className="btns">
                            <button type="button" className="w-50" onClick={handleEdusubmit}>
                                <GetStartedBtn extraClass="add w-50 align-left" btn="Save" />
                            </button>
                            <button type="button" className="w-50" onClick={addMoreSections}>
                                <GetStartedBtn extraClass="add w-50 align-right transparent" btn="Add more" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="res-parent">
                    {render()}
                </div>
                <RoundBtn />
                <ToastContainer/>
            </div>
        </>
    );
}
