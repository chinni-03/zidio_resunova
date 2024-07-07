import React from "react";
import { useAward } from "../../../../context/resumeContext/awardDetails";


export default function Awards2Resume() {
    const {awardData} = useAward();
    return (
        <>
        <p className="section head first serif">Awards</p>
        <hr className="hr-mira" />
        {awardData.map((awardData, index)=>(
                <div className="edu" key={index}>
                    <p className="institute">{awardData?.awardname||"Dean's List"} | 
                        <span className="company">{awardData?.institute||"Bellows College"}</span></p>
                    <p className="bold upper year">
                        {awardData?.awardyear||"MM/20XX"}</p>
                    <br />
                </div>

            ))}
            <div className="edu">
                <p className="institute serif">Dean's List | <span className="company serif">Bellows College</span></p>
                <p className="bold upper year serif">
                    MM/20XX - MM/20XX</p>
                <br />
            </div>
        </>
    )
}