import React from "react";
import { useEducation } from "../../../context/resumeContext/education_details";

export default function Education2() {
    const {educationdata} = useEducation();

    return (
        <>
        <p className="section head serif">Education</p>
        <hr className="hr-mira" />
        {educationdata.map((education)=>(
            <>
            <div className="edu">
                <p className="institute serif">{education?.institute||"Bellows College"}</p>
                <p className="bold upper year serif">
                    {education?.startgradumonth && education?.startgraduyear ? 
                                `${education.startgradumonth}/${education.startgraduyear}` : 
                                "MM/20XX"} - {education?.endgradumonth && education?.endgraduyear ? 
                                `${education.endgradumonth}/${education.endgraduyear}` : 
                                "MM/20XX"}
                </p>
                <p className="quali serif"><span className="serif">{education?.qualification||"BA"}</span> in <span className="serif">{education?.subject||"Communications"}</span></p>
                <br />
            </div>
            </>
        ))}
        </>
    )
}