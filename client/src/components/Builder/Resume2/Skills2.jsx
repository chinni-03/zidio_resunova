import React from "react";
import { useSkill } from "../../../context/resumeContext/skilldetail";

export default function Skills2() {
    const {skillData} = useSkill();
    return (
        <>
        <p className="section head serif">Skills</p>
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
        </>
    )
}