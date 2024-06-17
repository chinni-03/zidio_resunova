import "./Signup.css";
import mainimage from "../../assets/images/harshini_resume.png";
import happy from "../../assets/images/happy.png";
import { useForm } from "../../context/Form";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import logo from '../../assets/images/resunova-logo.png'
import GetStartedBtn from "../homepage/GetStartedBtn";
import { Link } from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";


export const Signup = ()=>{
    const {userdata, setUserData, handleSignUp, handleVisibility, visible} = useForm();

    const margin = {
        marginLeft: "1rem",
        marginTop: "-.05rem",
        fontWeight: 600
    }

    useEffect(() => {
        document.title = "Sign Up"
    })

    return (
        <>
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
                <img src={mainimage} alt="res"/>
            </div>
        </div>
    <div id="div2">
        <div class="text">
            <p>Ready to join the family?</p>
        </div>
        <div class="smiley">
            <img src={happy} alt="smile" />
        </div>
        <div class="logincon">
            <div class="signup-name">
                <p>Name</p>
                <div class="input-box">
                    <input type="text" name="name"
                    value={userdata.name}
                    onChange={(e)=>setUserData({...userdata, name: e.target.value})} 
                    placeholder="Enter Your Full Name" id="typing"/>
                </div>
            </div>
            <div class="signup-email">
                <p>Email</p>
                <div class="input-box">
                    <input type="email"
                    value={userdata.email}
                    onChange={(e)=>setUserData({...userdata, email: e.target.value})} 
                    name="email" placeholder="Enter Your Email Address" id="typing"/>
                </div>
            </div>
            <div class="signup-password">
                <p>Password</p>
                <div class="input-box">
                    <input type={visible?"text":"password"}
                    value={userdata.password}
                    onChange={(e)=>setUserData({...userdata, password: e.target.value})} 
                    name="password" placeholder="Enter Your Password" id="typing"/>
                </div>
                {visible?<FaEye onClick={handleVisibility}/>: <FaEyeSlash onClick={handleVisibility}/>}
            </div>
            <Link to={'/signin'} className="login-link"><p>Already a part of the family? Hop in!</p></Link>
        </div>
            <button type="submit" className="w-20" onClick={handleSignUp}>
                <GetStartedBtn extraClass="w-100" btn="Sign up" />
            </button>
            <ToastContainer/>
        </div>
        </>
    )
}