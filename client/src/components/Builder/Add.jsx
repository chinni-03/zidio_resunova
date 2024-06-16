import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";

export default function Add() {

    useEffect(() => {
        document.title = "Resume Builder";
    })

    return (
        <>
        <Nav />
        <div className="main-page">
            <div className="fillers">
                <Panel page="add" />
                {/* <CustomForm details={
                    {
                        title: "Personal Details",
                        fname: "Enter your full name",
                        phone: "Enter your phone number",
                        designation: "Enter your designation",
                        portfolio: "Add portfolio link",
                        email: "Enter email address",
                        subtitle: "Additional Details",
                        ghub: "Github Profile",
                        linkedin: "LinkedIn Profile"
                    }
                } /> */}
                <div className="form">
                    <p className="subtitle">Additional Details</p>
                    <div className="inputs">
                        <label htmlFor="add" className="resume-label">Section name</label>
                        <input className="resume-input" type='text' id="add" name="add" placeholder="Section name" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="desc" className="resume-label">Description</label>
                        <input className="resume-input" type='text' id="desc" name="desc" placeholder="Description" />
                    </div>
                    {/* <GetStartedBtn extraClass="add" btn="Add more" /> */}
                </div>
            </div>
            <div className="res-parent">
                <Resume />
            </div>
        </div>
        </>
    )
}