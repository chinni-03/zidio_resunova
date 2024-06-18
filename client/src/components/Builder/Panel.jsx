import React from "react";
import PanelItem from "./PanelItem";
import profile from '../../assets/images/user.png';
import edu from '../../assets/images/mortarboard.png';
import skills from '../../assets/images/skills.png';
import awards from '../../assets/images/medal.png';
import exp from '../../assets/images/portfolio.png';
import { Link } from "react-router-dom";

export default function Panel(props) {

    const selected = () => {
        if(props.page == "personal") {
            return <>
                <Link to={`/personal-details/`}><PanelItem link="" extraClass="selected" img={profile} /></Link>
                <Link to={'/education-details'}><PanelItem img={edu} /></Link>
                <Link to={'/experience-details'}><PanelItem img={exp} /></Link>
                <Link to={'/skills'}><PanelItem img={skills} /></Link>
                <Link to={'/awards'}><PanelItem img={awards} /></Link>
            </>
        } else if(props.page == "exp") {
            return <>
                <Link to={"/personal-details"}><PanelItem link="" img={profile} /></Link>
                <Link to={'/education-details'}><PanelItem img={edu} /></Link>
                <Link to={'/experience-details'}><PanelItem extraClass="selected" img={exp} /></Link>
                <Link to={'/skills'}><PanelItem img={skills} /></Link>
                <Link to={'/awards'}><PanelItem img={awards} /></Link>
            </>
        } else if(props.page == "edu") {
            return <>
                <Link to={"/personal-details"}><PanelItem link="" img={profile} /></Link>
                <Link to={'/education-details'}><PanelItem extraClass="selected" img={edu} /></Link>
                <Link to={'/experience-details'}><PanelItem img={exp} /></Link>
                <Link to={'/skills'}><PanelItem img={skills} /></Link>
                <Link to={'/awards'}><PanelItem img={awards} /></Link>
            </>
        } else if(props.page == "skills") {
            return <>
                <Link to={"/personal-details"}><PanelItem link="" img={profile} /></Link>
                <Link to={'/education-details'}><PanelItem img={edu} /></Link>
                <Link to={'/experience-details'}><PanelItem img={exp} /></Link>
                <Link to={'/skills'}><PanelItem extraClass="selected" img={skills} /></Link>
                <Link to={'/awards'}><PanelItem img={awards} /></Link>
            </>
        } else if(props.page == "awards") {
            return <>
                <Link to={"/personal-details"}><PanelItem link="" img={profile} /></Link>
                <Link to={'/education-details'}><PanelItem img={edu} /></Link>
                <Link to={'/experience-details'}><PanelItem img={exp} /></Link>
                <Link to={'/skills'}><PanelItem img={skills} /></Link>
                <Link to={'/awards'}><PanelItem extraClass="selected" img={awards} /></Link>
            </>
        }
    }

    return (
        <>
        <div className="panel">
            {selected()}
        </div>
        </>
    )
}