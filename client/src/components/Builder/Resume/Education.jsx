import React from "react";
import { useEducation } from "../../../context/resumeContext/education_details";

export default function Education() {
    const {educationdata} = useEducation();
    console.log(educationdata)
    return (
        <>
        {educationdata.map((education)=>(
            <>
            <p className="section head">Education</p>
            <hr className="hr-mira" />
            <p className="institute">{education?.institute||"Bellows College"}</p>
            <p className="bold upper year">
                <b>{education?.startgradumonth && education?.startgraduyear ? 
                            `${education.startgradumonth}/${education.startgraduyear}` : 
                            "MM/20XX"}</b></p>
            <p className="bold upper year">
                <b>{education?.endgradumonth && education?.endgraduyear ? 
                            `${education.endgradumonth}/${education.endgraduyear}` : 
                            "MM/20XX"}
                        </b></p>
            <p className="quali"><span>{education?.qualification||"BA"}</span> in <span>{education?.subject||"Communications"}</span></p>
            </>

        ))}
        </>
    )
}