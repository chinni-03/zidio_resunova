// import React, { useEffect, useState } from "react";
// import Nav from "./Nav";
// import Panel from "./Panel";
// import Resume2 from "./Resume2/Resume2";
// import Resume from "./Resume/Resume";
// import { useParams } from "react-router-dom";
// import { usePersonal } from "../../context/resumeContext/personal_details";
// import GetStartedBtn from "../homepage/GetStartedBtn";
// import RoundBtn from "../RoundBtn";
// import { ToastContainer } from "react-toastify";

// export default function PersonalDetails() {
//     const { handleOnChange, formData, handlePersonalsignup, fetchData, setFormData } = usePersonal();
//     const { resumeType } = useParams();
//     const [isSaved, setIsSaved] = useState(false);

//     useEffect(() => {
//         document.title = "Resume Builder";
//     }, []);

//     const initialFormData = {
//         username: "",
//         phone: "",
//         designation: "",
//         portfolio: "",
//         useremail: "",
//         github: "",
//         linkedin: ""
//     };

//     const details = {
//         title: "Personal Details",
//         username: "Enter your full name",
//         phone: "Enter your phone number",
//         designation: "Enter your designation",
//         portfolio: "Add portfolio link",
//         useremail: "Enter email address",
//         subtitle: "Additional Details",
//         github: "Github Profile",
//         linkedin: "LinkedIn Profile"
//     };

//     const render = () => {
//         if (resumeType === "resume") {
//             return <Resume resumeDetails={isSaved ? null : formData} />;
//         } else if (resumeType === "resume2") {
//             return <Resume2 resumeDetails={isSaved ? null : formData} />;
//         }
//     };

//     const handleSubmit = async () => {
//         const success = await handlePersonalsignup(formData);
//         if (success) {
//             setFormData(initialFormData);  // Reset form data to initial state
//             setIsSaved(true);  // Set isSaved to true to show getPersonaldata
//         }
//     };

//     return (
//         <>
//             <Nav />
//             <div className="main-page">
//                 <div className="fillers">
//                     <Panel page="personal" resume={resumeType} />
//                     <div className="form">
//                         {Object.keys(details).map((key, index) => {
//                             if (key === 'title' || key === 'subtitle') {
//                                 if (key === 'subtitle') {
//                                     return <p className="subtitle" key={index}>{details[key]}</p>;
//                                 }
//                                 return <p className="title" key={index}>{details[key]}</p>;
//                             }

//                             const isLinkField = key === 'portfolio' || key === 'github' || key === 'linkedin';

//                             return (
//                                 <div key={index} className="inputs">
//                                     <label htmlFor={key} className="resume-label">{details[key]}</label>
//                                     <input className="resume-input"
//                                         type={isLinkField ? 'url' : 'text'} id={key} name={key}
//                                         value={formData[key] || ''}
//                                         onChange={handleOnChange} />
//                                 </div>
//                             );
//                         })}
//                         <div className="btns">
//                             <button className="w-50" type="button" onClick={handleSubmit}>
//                                 <GetStartedBtn extraClass="add align-left w-50" btn="Save" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="res-parent">
//                     {render()}
//                 </div>
//                 <RoundBtn />
//                 <ToastContainer />
//             </div>
//         </>
//     );
// }

// ProjectDetails.js
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import RoundBtn from "../RoundBtn";
import { useProject } from "../../context/resumeContext/projectdetails";

export default function ProjectDetails() {
    const { handleOnChange, handleSubmitProject, projectData } = useProject();

    useEffect(() => {
        document.title = "Resume Builder";
    }, []);

    const initialdetails = {
        title: "Project Details",
        company: "Project Institue",
        startyear: "Start year",
        startmonth: "Start month",
        endyear: "End year",
        endmonth: "End month",
        description: "Description"
    };

    const [proinputs, setProInputs] = useState([initialdetails]);

    const addProSection = () => {
        setProInputs([...proinputs, initialdetails]);
    };

    const deleteProSection = (index) => {
        const updateSection = [...proinputs];
        updateSection.splice(index, 1);
        setProInputs(updateSection);
    };

    const { resumeType } = useParams();

    const render = () => {
        if (resumeType === "resume") {
            return <Resume />;
        } else if (resumeType === "resume2") {
            return <Resume2 />;
        }
    };

    return (
        <>
            <Nav />
            <div className="main-page">
                <div className="fillers">
                    <Panel page="projects" resume={resumeType} />
                    <div className="form">
                        {proinputs.map((details, index) => (
                            <div key={index} className="experience-section">
                                {Object.keys(details).map((key, idx) => {
                                    const isLinkField = key === 'startyear' || key === 'startmonth' || key === 'endmonth' || key === 'endyear';

                                    return (
                                        <div key={idx} className="inputs">
                                            <label htmlFor={key} className="resume-label">{details[key]}</label>
                                            <input
                                                className="resume-input"
                                                value={projectData[index] ? projectData[index][key] : ""}
                                                onChange={(e) => handleOnChange(index, e)}
                                                type={isLinkField ? 'number' : 'text'}
                                                id={key}
                                                name={key}
                                            />
                                        </div>
                                    );
                                })}
                                {index > 0 && (
                                    <button type="button" className="w-100" onClick={() => deleteProSection(index)}>
                                        <GetStartedBtn extraClass="add align-right red-btn" btn="Remove" />
                                    </button>
                                )}
                            </div>
                        ))}
                        <div className="btns">
                            <button type="button" className="w-50" onClick={handleSubmitProject}>
                                <GetStartedBtn extraClass="add align-left w-50" btn="Save" />
                            </button>
                            <button type="button" className="w-50" onClick={addProSection}>
                                <GetStartedBtn extraClass="add align-right w-50 transparent" btn="Add more" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="res-parent">
                    {render()}
                </div>
                <RoundBtn />
            </div>
        </>
    );
}