import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import RoundBtn from "../RoundBtn";

export default function AwardDetails() {

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const initialdetails = {
        title: "Award Details",
        name: "Award Name",
        institute: "Awarding Institute",
        year: "Awarded Year"
    }

    const [addmoreaward, setAddmoreaward] = useState([initialdetails]);
    const addmoreSection = ()=>{
        setAddmoreaward([...addmoreaward, initialdetails])
    }

    const deleteSection = (index)=>{
        const updateawardinput = [...addmoreaward]
        updateawardinput.splice(index,1)
        setAddmoreaward(updateawardinput)
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
                <Panel page="awards" resume={resumeType} />
                <div className="form">
                    {addmoreaward.map((details, index)=>(
                        <div>
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
                        <input className="resume-input" type={isLinkField ? 'url' : 'text'} id={key} name={key} />
                        </div>
                    );
                    })}
                    {index>0 && (<button type="button" className="w-100" onClick={()=>deleteSection(index)}>
                        <GetStartedBtn extraClass="add red-btn align-right" btn="Remove" />
                    </button>)}
                    </div>
                    ))}
                    <div className="btns">
                        <button className="w-50" type="button">
                            <GetStartedBtn extraClass="add align-left w-50" btn="Save" />
                        </button>
                        <button type="button" className="w-50" onClick={addmoreSection}>
                            <GetStartedBtn extraClass="add align-right transparent w-50" btn="Add more" />
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