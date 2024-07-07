import React from "react";
import "../Lastpage/Lastpage.css";
import happy from '../../assets/images/happy.png';
import logo from '../../assets/images/resunova-logo.png';
import { Link } from 'react-router-dom';
import RoundBtn from '../RoundBtn';
import { useEducation } from "../../context/resumeContext/education_details";
import { useResume } from "../../context/ResumeDowload";
import ContactResume from "../Builder/Resume/contact/Contact_resume";
import SkillsResume from "../Builder/Resume/Skills/Skills_resume";
import EducationResume from "../Builder/Resume/Education/Education_resume";
import AwardsResume from "../Builder/Resume/Awards/Awards_resume";
import ExperienceResume from "../Builder/Resume/Experience/Experience_resume";
import ProjectsResume from "../Builder/Resume/Projects/Projects_resume";
import { usePersonal } from "../../context/resumeContext/personal_details";
import { ToastContainer } from "react-toastify";
import { useAward } from "../../context/resumeContext/awardDetails";
import { useExperience } from "../../context/resumeContext/experience_details";
import { useProject } from "../../context/resumeContext/projectdetails";
import { useSkill } from "../../context/resumeContext/skilldetail";
import Education2Resume from "../Builder/Resume2/Education2/Education2Resume";
import Skills2Resume from "../Builder/Resume2/skill2/Skill2Resume";
import Contact2Resume from "../Builder/Resume2/Contact2/Contact2Resume";
import Awards2Resume from "../Builder/Resume2/Awards2/Awards2Resume";
import Experience2Resume from "../Builder/Resume2/Experience2/Experience2Resume";
import Projects2Resume from "../Builder/Resume2/Project2/Project2Resume";
import Nav from "../Builder/Nav";



export default function Lastpage() {

    const { sendPdfByEmail, pdfRef } = useResume();
    const { getPersonaldata } = usePersonal();
    const { deleteAwardData } = useAward();
    const { deleteEducationData } = useEducation();
    const { deleteExperienceData } = useExperience();
    const { deletePersonal } = usePersonal();
    const { deleteProjectDelete } = useProject();
    const { deleteSkillData } = useSkill();

    const handleSendResume = async () => {
        const success = await sendPdfByEmail();
        if (success) {
            await deleteAwardData();
            await deleteEducationData();
            await deleteExperienceData();
            await deletePersonal();
            await deleteProjectDelete();
            await deleteSkillData();
        }
    }

    return (
        <>
        <Nav/>
            <div class="down">
                <div class="left-down">
                    <Link to={'/'} className="resu-logo">
                        <img src={logo} alt="resunova-logo" />
                        <p>ResuNova</p>
                    </Link>
                    <div class="preview">
                        <div className="resume-pdf">
                            <div className="res" ref={pdfRef}>
                                <div className="res-child">
                                    <p className="fname">{getPersonaldata?.username || "Mira Karlson"}</p>
                                    <hr className="hr-mira" />
                                    <p className="des">{getPersonaldata?.designation || "Social media marketing specialist"}</p>
                                    <hr className="hr-mira" />
                                    <div className="res-content">
                                        <div className="left-col">
                                            <ContactResume data={getPersonaldata} />
                                            <SkillsResume />
                                            <EducationResume />
                                            <AwardsResume />
                                        </div>
                                        <div className="right-col">
                                            <ExperienceResume />
                                            <ProjectsResume />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-down">
                    <div className="down-content">
                        <div id="preview-txt">
                            <p>
                                Here's a final preview of your resume!
                            </p>
                        </div>
                        <img src={happy} alt="" />
                    </div>
                    <button type="button" onClick={handleSendResume}>
                        <RoundBtn />
                    </button>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}