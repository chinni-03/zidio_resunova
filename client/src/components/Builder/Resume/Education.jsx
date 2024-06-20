import React from "react";
import { useEducation } from "../../../context/resumeContext/education_details";

export default function Education() {
    const {educationdata} = useEducation();
    console.log(educationdata)
    return (
        <>
        <div className="section">
            <p className="head">Education</p>
            <hr className="hr-mira" />
            {educationdata.map((education)=>(
                <>
                {console.log(education)}
                <div className="edu">
                    <p className="institute">{education?.institute||"Bellows College"}</p>
                    <p className="bold upper year">
                        {education?.startgradumonth && education?.startgraduyear ? 
                                    `${education.startgradumonth}/${education.startgraduyear}` : 
                                    "MM/20XX"} - {education?.endgradumonth && education?.endgraduyear ? 
                                    `${education.endgradumonth}/${education.endgraduyear}` : 
                                    "MM/20XX"}
                        </p>
                    <p className="quali"><span>{education?.qualification||"BA"}</span> in <span>{education?.subject||"Communications"}</span></p>
                </div>
                </>
            ))}
        </div>
        </>
    )
}