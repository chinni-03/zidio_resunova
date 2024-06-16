import React, { useEffect } from "react";
import '../Signinpage/Signin.css';
import resume from '../../assets/images/harshini_resume.png';
import happy from '../../assets/images/happy.png';
import logo from '../../assets/images/resunova-logo.png';
<<<<<<< HEAD
import GetStartedBtn from "../homepage/GetStartedBtn";
import { ToastContainer } from "react-toastify";
import { useForm } from "../../context/Form";

export default function Signin() {

    const {userdata, setUserData, handleSignUp} = useForm();

    const margin = {
        marginLeft: "1rem",
        marginTop: "-.05rem",
        fontWeight: 600
    }
    
=======
import { useForm } from "../../context/Form";
import { ToastContainer } from "react-toastify";

export default function Signin() {
    const {usersignIn,setUsersignIn, handleSignIn} = useForm();
>>>>>>> e79130828f87f913d8bd3a11622572466433da6e
    useEffect(() => {
        document.title = "Sign In"
    })

    return (
        <>
        <div className="signin">
        <div id="div1">
            <div class="resu">
                <a href="/" class="resutext">
                    <div className="fit-content">
                        <img src={logo} style={margin} alt="resunova-logo" />
                        <a class="navbar-brand brand fit-content" href="#">ResuNova</a>
                    </div>
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
<<<<<<< HEAD
                            <input type="email"
                            value={userdata.email}
                            onChange={(e)=>setUserData({...userdata, email: e.target.value})} 
                            name="email" placeholder="Enter Your Email Address" id="typing"/>
=======
                        <input type="email" 
                            value={usersignIn.email}
                            onChange={(e)=>setUsersignIn({...usersignIn, email: e.target.value})}
                            placeholder="Enter Your Email Address" id="typing"/>
>>>>>>> e79130828f87f913d8bd3a11622572466433da6e
                        </div>
                    </div>
                    <div class="signin-password">
                        <p>Password</p>
                        <div class="input-box">
<<<<<<< HEAD
                            <input type="password"
                            value={userdata.password}
                            onChange={(e)=>setUserData({...userdata, password: e.target.value})} 
                            name="password" placeholder="Enter Your Password" id="typing"/>
                        </div>
                    </div>
                    <button type="submit" class="w-30 mt-5" onClick={handleSignUp}>
                            <GetStartedBtn extraClass="w-100" btn="Sign in" />
                    </button>
                </div>
            </div>
            <ToastContainer />
=======
                        <input type="password"
                            value={usersignIn.password} 
                            onChange={(e)=>setUsersignIn({...usersignIn, password: e.target.value})}
                            placeholder="Enter Your Password" id="typing"/>
                        </div>
                    </div>
                    <button class="button" type="submit" onClick={handleSignIn}> 
                            <p id="sign">
                                Sign In
                            </p>
                    </button>
                </div>
            </div>
            <ToastContainer/>
>>>>>>> e79130828f87f913d8bd3a11622572466433da6e
        </div>
        </>
    )

}