import React, { useEffect } from "react";
import '../Signinpage/Signin.css';
import resume from '../../assets/images/harshini_resume.png';
import happy from '../../assets/images/happy.png';
import logo from '../../assets/images/resunova-logo.png';

export default function Signin() {
    
    useEffect(() => {
        document.title = "Sign In"
    })

    return (
        <>
        <div>
            <div class="left">
                <div class="head1">
                    <div class="resulogo">
                        <img class="logo" src={logo} alt="" />
                    </div>
                    <div class="resutext">
                        ResuNova
                    </div>
                </div>
                <div class="temp">
                    <img src={resume} alt="harsh"/>
                </div>
            </div>

            <div class="right">
                <div class="head2">
                    Welcome back, fam!
                </div>
                <div class="smiley">
                    <img src={happy} alt="smile"/>
                </div>
                <div class="login">
                    <div class="email">
                        <p>Email Address</p>
                        <div class="input-box">
                            <input type="email" placeholder="Enter Your Email Address" id="typing"/>
                        </div>
                    </div>
                    <div class="password">
                        <p>Password</p>
                        <div class="input-box">
                            <input type="password" placeholder="Enter Your Password" id="typing"/>
                        </div>
                    </div>
                    <button class="button">
                            <p id="sign">
                                Sign In
                            </p>
                    </button>
                </div>
            </div>
        </div>
        </>
    )

}