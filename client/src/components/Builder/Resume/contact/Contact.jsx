import React from "react";

export default function Contact({resumeDetails}) {
    return (
        <>
        <div className="section">
            <p className="head">contact</p>
            <hr className="hr-mira" />
            <p>Phone: {resumeDetails?.phone||"1234567890"}</p>
            <p>email: {resumeDetails?.useremail||"xyz@example.com"}</p>
            <p>Website: {resumeDetails?.portfolio||"www.example.com"}</p>
            <p>Github: {resumeDetails?.github||"/miraks"}</p>
            <p>LinkedIn: {resumeDetails?.linkedin||"/miraks"}</p>
        </div>
        </>
    )
}