import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useNavigate, useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import RoundBtn from "../RoundBtn";
import { useProject } from "../../context/resumeContext/projectdetails";
import { useSkill } from "../../context/resumeContext/skilldetail";
import { useAward } from "../../context/resumeContext/awardDetails";
import { useEducation } from "../../context/resumeContext/education_details";
import { useExperience } from "../../context/resumeContext/experience_details";
import { usePersonal } from "../../context/resumeContext/personal_details";

export default function ProjectDetails() {
    const navigate = useNavigate();
    const { handleOnChange, handleSubmitProject, projectData } = useProject();
    const {handleSubmitData} = useSkill();
    const {handleSubmitAwarData} = useAward();
    const {handleEdusubmit} = useEducation();
    const {handleSubmitExe} = useExperience();
    const {handlePersonalsignup} = usePersonal();

    useEffect(() => {
        document.title = "Resume Builder";
    }, []);

    const initialDetails = {
        Prtitle: "Project Details",
        title: "title",
        company: "Project Institute",
        startyear: "Start year",
        startmonth: "Start month",
        endyear: "End year",
        endmonth: "End month",
        description: "Description"
    };

    const [proinputs, setProInputs] = useState([initialDetails]);

    const addProSection = () => {
        setProInputs([...proinputs, initialDetails]);
    };

    const deleteProSection = (index) => {
        const updatedSections = [...proinputs];
        updatedSections.splice(index, 1);
        setProInputs(updatedSections);
    };

    const { resumeType } = useParams();

    const renderResume = () => {
        if (resumeType === "resume") {
            return <Resume />;
        } else if (resumeType === "resume2") {
            return <Resume2 />;
        }
    };

    const finalSubmit = async ()=>{
        await handleSubmitProject();
        await handleEdusubmit();
        await handlePersonalsignup();
        await handleSubmitAwarData();
        await handleSubmitData();
        await handleSubmitExe();
        navigate("/download-resume")
    }

    return (
        <>
            <Nav />
            <div className="main-page">
                <div className="fillers">
                    <Panel page="projects" resume={resumeType} />
                    <div className="form">
                        {proinputs.map((details, index) => (
                            <div key={index} className="experience-section">
                                {Object.keys(details).map((key, idx) => {

                                    if (key === 'Prtitle' || key === 'subtitle') {
                                        if (key === 'subtitle') {
                                            return <p className="subtitle" key={idx}>{details[key]}</p>;
                                        }
                                        return <p className="title" key={idx}>{details[key]}</p>;
                                    }

                                    const isLinkField = key === 'startyear' || key === 'startmonth' || key === 'endmonth' || key === 'endyear';

                                    return (
                                        <div key={idx} className="inputs">
                                            <label htmlFor={key} className="resume-label">{details[key]}</label>
                                            <input
                                                className="resume-input"
                                                value={projectData[index] ? projectData[index][key] : ""}
                                                onChange={(e) => handleOnChange(index, e)}
                                                type={isLinkField ? 'number' : 'text'}
                                                id={key} name={key} />
                                        </div>
                                    );
                                })}
                                {index > 0 && (
                                    <button type="button" className="w-100" onClick={() => deleteProSection(index)}>
                                        <GetStartedBtn extraClass="add align-right red-btn" btn="Remove" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <div className="btns">
                            <button type="button" className="w-50" onClick={finalSubmit}>
                                <GetStartedBtn extraClass="add align-left w-50" btn="Save & Next" />
                            </button>
                            <button type="button" className="w-50" onClick={addProSection}>
                                <GetStartedBtn extraClass="add align-right w-50 transparent" btn="Add more" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="res-parent">
                    {renderResume()}
                </div>
                <RoundBtn />
            </div>
        </>
    );
}
