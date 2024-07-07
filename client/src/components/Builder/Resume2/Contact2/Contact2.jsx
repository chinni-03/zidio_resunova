import React from "react";

export default function Contact2({resumeDetails}) {
    return (
        <>
        <div className="section">
            <p className="head serif">contact</p>
            <hr className="hr-mira" />
            <p className="serif">Phone: {resumeDetails?.phone||"1234567890"}</p>
            <p className="serif">Website: {resumeDetails?.portfolio||"www.example.com"}</p>
            <p className="serif">email: {resumeDetails?.useremail||"xyz@example.com"}</p>
            <p className="serif">Github:{resumeDetails?.github|| "/miraks"}</p>
            <p className="serif">LinkedIn: {resumeDetails?.linkedin||"/miraks"}</p>
        </div>
        </>
    )
}