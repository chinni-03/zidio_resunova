import React from "react";
import { useEducation } from "../../../context/resumeContext/education_details";

export default function Education() {
    const {educationdata} = useEducation();
    return (
        <>
        <p className="section head">Education</p>
        <hr className="hr-mira" />
        {educationdata.map((education, index)=>(
            <>
            <div className="edu" key={index}>
                <p className="institute">{education?.institute||"Bellows College"}</p>
                <p className="bold upper year">
                    <b>{education?.startgradumonth && education?.startgraduyear ? 
                                `${education.startgradumonth}/${education.startgraduyear}` : 
                                "MM/20XX"} - {education?.endgradumonth && education?.endgraduyear ? 
                                `${education.endgradumonth}/${education.endgraduyear}` : 
                                "MM/20XX"}
                    </b></p>
                <p className="quali"><span>{education?.qualification||"BA"}</span> in <span>{education?.subject||"Communications"}</span></p>
            </div>
            </>
        ))}
        </>
    )
}