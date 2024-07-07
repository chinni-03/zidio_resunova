import React from "react";
import { useProject } from "../../../../context/resumeContext/projectdetails";

export default function ProjectsResume() {
    const {getProjectData} = useProject();
    return (
        <>
        <p className="section head">Projects</p>
        <hr className="hr-mira" />
        {getProjectData.map((projData, index)=>(
            <div className="proj" key={index}>
            <div className="col-exp">
                <p className="institute">{projData?.title||"Social Media Marketing Specialist"} | 
                    <span className="company">{projData?.company||"Google"}</span></p>
                <p className="bold upper year">
                    <span className="month">{projData?.startmonth?projData.startmonth:"MM"}</span>/
                <span className="year">{projData?.startyear?projData.startyear:"YYYY"}</span> - 
                <span className="month2">{projData?.endmonth?projData.endmonth:"MM"}</span>/
                <span className="year2">{projData?.endyear?projData.endyear:"YYYY"}</span></p>
            </div>
            <p className="quali">{projData?.description||
            "Developed and executed successtul social media campaigns across multiple piatfors fo increase brond awareness and dfve iraffic fo the company's website."}</p>
            <br />
        </div>

        ))}
        
        </>
    )
}