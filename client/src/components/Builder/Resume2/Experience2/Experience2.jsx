import React from "react";
import { useExperience } from "../../../../context/resumeContext/experience_details";

export default function Experience2() {
    const {experienceData} = useExperience();
    return (
        <>
        <p className="section head first serif">Experience</p>
        <hr className="hr-mira" />
        {experienceData?.map((expData, index)=>(
        <div className="exp2" key={index}>
                <div className="col-exp">
                    <p className="institute serif">{expData?.position || "Social Media Marketing Specialist"} <br />
                    <span className="company serif">{expData?.companyname||"Google"}</span></p>
                    <p className="bold upper year serif">
                        <span className="month serif">{expData?.startmonth?expData.startmonth:"MM"}</span>/
                        <span className="year serif">{expData?.startyear?expData.startyear:"YYYY"}</span> - 
                        <span className="month2 serif">{expData?.endmonth?expData.endmonth:"MM"}</span>/
                        <span className="year2 serif">{expData?.endyear?expData.endyear:"YYYY"}</span></p>
                </div>
            <br/>
        </div>
        ))}
        </>
    )
}