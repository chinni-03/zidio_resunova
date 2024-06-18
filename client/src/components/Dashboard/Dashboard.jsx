import React, { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css";
// import logo from '../../assets/images/resunova-logo.png';
// import user from '../../assets/images/user.png';
// import resume from '../../assets/images/resume.png';
// import letter from '../../assets/images/cover-letter.png';
import Nav from "../Builder/Nav";
import Footer from "../Footer";
import { useDashboard } from "../../context/dashboard";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import mira from '../../assets/images/mira.png';
import mira2 from '../../assets/images/mira2.png';
import PersonalDetails from "../Builder/PersonalDetails";
import Resume from "../Builder/Resume/Resume";
import Resume2 from "../Builder/Resume2/Resume2";

export default function Dashboard() {
    const [selectedResume, setSelectedResume] = useState(null)

    useEffect(() => {
        document.title = "Dashboard"
    })


    const navigate = useNavigate();

    const callResume = (resumeType) => {
        // setSelectedResume();
        navigate('/personal-details/' + resumeType); 
    };

    return (
        <>
        <Nav />
        <div className="dash">
            <div class="bigtext">
                <p id="create">What shall we create today?</p>
            </div>
            <div class="product">
                    {/* <div class="resume">
                        <img src={resume} className="logo1" alt="" />
                    </div>
                    <div class="caption">Resume
                    </div> */}
                    <div className="resu-cap">
                        <img src={mira} onClick={() => callResume("resume")} alt="resu" />
                        <p className="cap">Basic Resume</p>
                    </div>
                    <div className="resu-cap">
                        <img src={mira2} onClick={() => callResume("resume2")} alt="resu" />
                        <p className="cap">Creative Resume</p>
                    </div>
            </div>
        </div>
        <Footer />
        </>
    )
}