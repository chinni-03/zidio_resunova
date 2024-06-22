import React from "react";
import { useSkill } from "../../../context/resumeContext/skilldetail";

export default function Skills() {
    const {skillData} = useSkill();
    return (
        <>
        <div className="section">
            <p className="head">Skills</p>
            <hr className="hr-mira" />
            {skillData.map((skilldata, index)=>(
            <ul className="skills serif" key={index}>
                <li className="serif">{skilldata?.skill||"Platform expertise"}</li>
                {/* <li className="serif">Content creation</li>
                <li className="serif">Analytics</li>
                <li className="serif">Communication</li>
                <li className="serif">Creativity</li>
                <li className="serif">Thinking</li> */}
            </ul>

        ))}
        </div>
        </>
    )
}