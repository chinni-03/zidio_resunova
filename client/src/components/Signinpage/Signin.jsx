import React, { useEffect } from "react";
import '../Signinpage/Signin.css';
import resume from '../../assets/images/harshini_resume.png';
import happy from '../../assets/images/happy.png';
import logo from '../../assets/images/resunova-logo.png';
import { useForm } from "../../context/Form";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import GetStartedBtn from "../homepage/GetStartedBtn";

export default function Signin() {
    const {usersignIn,setUsersignIn, handleSignIn} = useForm();
    useEffect(() => {
        document.title = "Sign In"
    })

    const margin = {
        marginLeft: "1rem",
        marginTop: "-.05rem",
        fontWeight: 600
    }

    return (
        <>
        <div className="signin">
        <div id="div1">
            <div class="resu">
                <a href="/" class="resutext">
                    <Link to={'/'}>
                        <div className="fit-content">
                            <img src={logo} style={margin} alt="resunova-logo" />
                            <a class="navbar-brand brand fit-content" href="#">ResuNova</a>
                        </div>
                    </Link>
                </a>
            </div>
            <div class="template">
                <img src={resume} alt="res"/>
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
                    <div class="signin-email">
                        <p>Email</p>
                        <div class="input-box">
                        <input type="email" 
                            value={usersignIn.email}
                            onChange={(e)=>setUsersignIn({...usersignIn, email: e.target.value})}
                            placeholder="Enter Your Email Address" id="typing"/>
                        </div>
                    </div>
                    <div class="signin-password">
                        <p>Password</p>
                        <div class="input-box">
                        <input type="password"
                            value={usersignIn.password} 
                            onChange={(e)=>setUsersignIn({...usersignIn, password: e.target.value})}
                            placeholder="Enter Your Password" id="typing"/>
                        </div>
                    </div>
                    <Link to={'/signup'} className="login-link"><p>Not a part of the family? Join now!</p></Link>
                </div>
                <button className="w-20" type="submit" onClick={handleSignIn}> 
                    <GetStartedBtn extraClass="w-100" btn="Sign up" />
                </button>
            </div>
            <ToastContainer/>
        </div>
        </>
    )

}