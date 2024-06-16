import React from "react";
import "../Dashboard/Dashboard.css";
import logo from '../../assets/images/resunova-logo.png';
import user from '../../assets/images/user.png';
import resume from '../../assets/images/resume.png';
import letter from '../../assets/images/cover-letter.png';
import Nav from "../Builder/Nav";

export default function Dashboard() {
    return (
        <>
        {/* <div class="head">
          <div class="resulogo">
             <img src={logo} className="logo" alt="" />
          </div>
        <div class="resutext">ResuNova</div>
        <button class="button">
            <p id="sign">Sign Out</p>
        </button>
        <div class="userlogo">
            <img src={user} className="userL" alt="" />
        </div>
    </div> */}
    <Nav />
    <div class="bigtext">
        <p id="create">What shall we create today?</p>
    </div>
    <div class="product">
        <div class="resume">
            <div class="reslogo">
                <img src={resume} className="logo1" alt="" />
            </div>
            <div class="restext">Resume
            </div>
        </div>
        <div class="coverletter">
            <div class="covlogo">
                <img src={letter} alt="" className="logo2" />
            </div>
            <div class="covtext">Cover-Letter
            </div>
        </div>
    </div>
        </>
    )
}