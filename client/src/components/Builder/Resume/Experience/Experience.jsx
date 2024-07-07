import React from "react";
import { useExperience } from "../../../../context/resumeContext/experience_details";


export default function Experience() {
        const {experienceData} = useExperience();
    return (
        <>
        <p className="section head">Experience</p>
        <hr className="hr-mira" />
        {experienceData.map((exedata,index)=>(
                <>
                <div className="expe" key={index}>
                        <p className="institute">{exedata?.position||"Social Media Marketing Specialist"} |
                                <span className="company">{exedata?.companyname||"Google"}</span></p>
                        <p className="bold upper year">
                                <span className="month">{exedata?.startmonth?exedata.startmonth:"MM"}</span>
                        /<span className="year">{exedata?.startyear?exedata.startyear:"YYYY"}</span>
                         - <span className="month2">{exedata?.endmonth?exedata.endmonth:"MM"}</span>/
                         <span className="year2">{exedata?.startyear?exedata.startyear:"YYYY"}</span></p>
                        <br />
                </div>
                
                </>
        ))}
        
        </>
    )
}