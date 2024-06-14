import "./Signup.css";
import mainimage from "../../assets/images/harshini_resume.png";
import happy from "../../assets/images/happy.png";
import { useForm } from "../../context/Form";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";


export const Signup = ()=>{
    const {userdata, setUserData, handleSignUp} = useForm();

    const margin = {
        marginLeft: "1rem",
        marginTop: ".5rem",
        fontWeight: 600
    }

    useEffect(() => {
        document.title = "Sign Up"
    })

    return (
        <>
        <div id="div1">
            <div class="resu">
                {/* <div class="resulogo">
                    <div class="logo"></div>
                </div> */}
                <a href="/" class="resutext">
                    <div className="fit-content">
                        <img src="/../../images/resunova-logo.png" style={margin} alt="resunova-logo" />
                        <a class="navbar-brand brand fit-content" href="#">ResuNova</a>
                    </div>
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
            <div class="name">
                <p>Name</p>
                <div class="input-box">
                    <input type="text" name="name"
                    value={userdata.name}
                    onChange={(e)=>setUserData({...userdata, name: e.target.value})} 
                    placeholder="Enter Your Full Name" id="typing"/>
                </div>
            </div>
            <div class="email">
                <p>Email</p>
                <div class="input-box">
                    <input type="email"
                    value={userdata.email}
                    onChange={(e)=>setUserData({...userdata, email: e.target.value})} 
                    name="email" placeholder="Enter Your Email Address" id="typing"/>
                </div>
            </div>
            <div class="password">
                <p>Password</p>
                <div class="input-box">
                    <input type="password"
                    value={userdata.password}
                    onChange={(e)=>setUserData({...userdata, password: e.target.value})} 
                    name="password" placeholder="Enter Your Password" id="typing"/>
                </div>
            </div>
        </div>
            <button class="button" type="submit" onClick={handleSignUp}>
                Sign Up
            </button>
            <ToastContainer/>
        </div>
        </>
    )
}