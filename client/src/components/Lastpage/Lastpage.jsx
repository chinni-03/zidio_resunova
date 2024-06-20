import React from "react";
import "../Lastpage/Lastpage.css";
import happy from '../../assets/images/happy.png';
import logo from '../../assets/images/resunova-logo.png';
import {Link} from 'react-router-dom';
import RoundBtn from '../RoundBtn';


export default function Lastpage()
{
    return (
        <>
        <div class="down">
            <div class="left-down">
                <Link to={'/'} className="resu-logo">
                    <img src={logo} alt="resunova-logo" />
                    <p>ResuNova</p>
                </Link>
                <div class="preview">
                    <div className="resume-pdf">
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
                <RoundBtn />
            </div>
        </div>
        </>
    )
}