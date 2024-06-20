import React from "react";
import PanelItem from "./PanelItem";
import profile from '../../assets/images/user.png';
import edu from '../../assets/images/mortarboard.png';
import skills from '../../assets/images/skills.png';
import awards from '../../assets/images/medal.png';
import exp from '../../assets/images/portfolio.png';
import projects from '../../assets/images/project.png';
import { Link } from "react-router-dom";

export default function Panel({page, resume}) {

    const basePath = (type) => `/${type}/${resume}`;

    const selected = () => {
        const paths = {
            personal: `${basePath("personal-details")}`,
            exp: `${basePath("experience-details")}`,
            edu: `${basePath("education-details")}`,
            skills: `${basePath("skills")}`,
            awards: `${basePath("awards")}`,
            projects: `${basePath("project-details")}`
        };

        const icons = [
            { path: paths.personal, img: profile, name: "personal" },
            { path: paths.edu, img: edu, name: "edu" },
            { path: paths.exp, img: exp, name: "exp" },
            { path: paths.skills, img: skills, name: "skills" },
            { path: paths.awards, img: awards, name: "awards" },
            { path: paths.projects, img: projects, name: "projects" }
        ];

        return icons.map(({ path, img, name }) => (
            <Link key={name} to={path}>
                <PanelItem extraClass={page === name ? "selected" : ""} img={img} />
            </Link>
        ));
    }

    return (
        <>
        <div className="panel">
            {selected()}
        </div>
        </>
    )
}