import React from "react";
import { useProject } from "../../../../context/resumeContext/projectdetails";

export default function Projects2Resume() {
    const {projectData} = useProject();
    return (
        <>
        <p className="section head serif">Projects</p>
        <hr className="hr-mira" />
        {projectData.map((projData, index)=>(
            <>
            <div className="proj" key={index}>
            <div className="col-exp">
                    <p className="institute serif">{projData?.title||"Social Media Marketing Specialist"} <br />
                    <span className="company serif">{projData?.company||"Google"}</span></p>
                    <p className="bold upper year serif">
                        <span className="month serif">{projData?.startmonth?projData.startmonth:"MM"}</span>/
                        <span className="year serif">{projData?.startyear?projData.startyear:"YYYY"}</span> - 
                        <span className="month2 serif">{projData?.endmonth?projData.endmonth:"MM"}</span>/
                        <span className="year2 serif">{projData?.endyear?projData.endyear:"YYYY"}</span></p>
                </div>
                <p className="quali serif">{projData?.decription||
            "Developed and executed successtul social media campaigns across multiple piatfors fo increase brond awareness and dfve iraffic fo the company's website."}</p>
                <br />
            </div>
            </>
        ))}
        </>
    )
}