import React from "react";
import { useExperience } from "../../../context/resumeContext/experience_details";

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
        <div className="expe">
                <div className="col-exp">
                        <p className="institute">Social Media Marketing Specialist | <span className="company">Google</span></p>
                        <p className="bold upper year"><span className="month">MM</span>/<span className="year">YYYY</span> - <span className="month2">MM</span>/<span className="year2">YYYY</span></p>
                </div>
                <p className="quali">Developed and executed successtul social media
                        compaigns across multiple piatfors fo increase brond
                        awareness and dfve iraffic fo the company's website.
                        Managed and grew the company's social media accounts
                        by creating engaging confent. monitoring analyics. and
                        implementing social media best practices. Colaborated
                        With cros-tuncional feams fo develop and execule
                        infegrated markeing compaigns hat leveraged social
                        media fo meet business objectves.
                </p>
                <br />
        </div>
        <div className="expe">
                <div className="col-exp">
                        <p className="institute">Social Media Marketing Specialist | <span className="company">Google</span></p>
                        <p className="bold upper year"><span className="month">MM</span>/<span className="year">YYYY</span> - <span className="month2">MM</span>/<span className="year2">YYYY</span></p>
                </div>
                <p className="quali">Developed and executed successtul social media
                        compaigns across multiple piatfors fo increase brond
                        awareness and dfve iraffic fo the company's website.
                        Managed and grew the company's social media accounts
                        by creating engaging confent. monitoring analyics. and
                        implementing social media best practices. Colaborated
                        With cros-tuncional feams fo develop and execule
                        infegrated markeing compaigns hat leveraged social
                        media fo meet business objectves.
                </p>
                <br />
        </div>
        </>
    )
}