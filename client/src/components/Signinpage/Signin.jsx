import React, { useEffect } from "react";
import '../Signinpage/Signin.css';
import resume from '../../assets/images/harshini_resume.png';
import happy from '../../assets/images/happy.png';
import logo from '../../assets/images/resunova-logo.png';
import { useForm } from "../../context/Form";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signin() {
    const { usersignIn, setUsersignIn, handleSignIn, handleVisibility, visible } = useForm();

    useEffect(() => {
        document.title = "Sign In";

        toast.success("Welcome to signin page!")
    }, []);

    const margin = {
        marginLeft: "1rem",
        marginTop: "-.05rem",
        fontWeight: 600
    }

    return (
        <div className="signin">
            <div id="div1">
                <div className="resu">
                    <Link to='/'>
                        <div className="fit-content">
                            <img src={logo} style={margin} alt="resunova-logo" />
                            <span className="navbar-brand brand fit-content">ResuNova</span>
                        </div>
                    </Link>
                </div>
                <div className="template">
                    <img src={resume} alt="res" />
                </div>
            </div>

            <div className="right">
                <div className="head2">
                    Welcome back, fam!
                </div>
                <div className="smiley">
                    <img src={happy} alt="smile" />
                </div>
                <div className="login">
                    <div className="signin-email">
                        <p>Email</p>
                        <div className="input-box">
                            <input
                                type="email"
                                value={usersignIn.email}
                                onChange={(e) => setUsersignIn({ ...usersignIn, email: e.target.value })}
                                placeholder="Enter Your Email Address"
                                id="typing"
                            />
                        </div>
                    </div>
                    <div className="signin-password">
                        <p>Password</p>
                        <div className="input-box">
                            <input
                                type={visible ? "text" : "password"}
                                value={usersignIn.password}
                                onChange={(e) => setUsersignIn({ ...usersignIn, password: e.target.value })}
                                placeholder="Enter Your Password"
                                id="typing"
                            />
                            <span className="eye" onClick={handleVisibility}>
                                {visible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                    </div>
                    <Link to='/signup' className="login-link"><p>Not a part of the family? Join now!</p></Link>
                </div>
                <button className="w-20" type="submit" onClick={handleSignIn}>
                    <GetStartedBtn extraClass="w-100" btn="Sign in" />
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}
