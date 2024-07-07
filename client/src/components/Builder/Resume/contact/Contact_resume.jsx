import React from "react";

export default function ContactResume({data}) {
    return (
        <>
        <div className="section">
            <p className="head">contact</p>
            <hr className="hr-mira" />
            <p>Phone: {data?.phone||"1234567890"}</p>
            <p>email: {data?.useremail||"xyz@example.com"}</p>
            <p>Website: {data?.portfolio||"www.example.com"}</p>
            <p>Github: {data?.github||"/miraks"}</p>
            <p>LinkedIn: {data?.linkedin||"/miraks"}</p>
        </div>
        </>
    )
}