import React, { useState } from "react";
import user from '../../assets/images/user.png';
import Nav from "../Builder/Nav";
import '../Profile/Profile.css';
import Footer from "../Footer";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useForm } from "../../context/Form";
import { useDashboard } from "../../context/dashboard";
import { ToastContainer } from "react-toastify";

export default function Profile() {
    const {visible, handleVisibility} = useForm();
    const {updateDetails, setUpdateDetails,handleSetPassword, data} = useDashboard();
    const [confirmVisisble, setConfirmVisisble] = useState(false);
    const handleConfirmVisible = ()=>{
        setConfirmVisisble(!confirmVisisble)
    }
    return (
        <>
         <Nav />
         <div className="profile-page">
            <div className="profile-det">
                <div class="biglogo">
                    <img src={user} class="blogo" alt=""/>
                </div>
                <div class="profile-name">
                    <p id="username">{data?.name}</p>
                </div>
                <div class="profile-section">
                    <div class="profile-label">Email Address : </div>
                    <div class="input-box-profile">
                        <input type="email" 
                        placeholder="abcdefg123@gmail.com" 
                        id="typing"
                        value={updateDetails.email}
                        onChange={(e)=>setUpdateDetails({...updateDetails, email:e.target.value})}
                        />
                    </div>
                <GetStartedBtn btn="Change email-address"/>
                </div>
                <div class="profile-section">
                    <div class="profile-label pass"> Password : </div>
                    <div class="input-box-profile">
                        <input type={visible?"text":"password"} 
                        placeholder="XXXXXXXXXX" id="typing"
                        value={updateDetails.password}
                        onChange={(e)=>setUpdateDetails({...updateDetails, password: e.target.value})}
                        />
                    </div>
                    <GetStartedBtn btn={visible?"Hide password":"Show Password"}
                    onClick={handleVisibility}
                    />
                </div>
                <div class="profile-section">
                    <div class="profile-label pass">Confirm Password : </div>
                    <div class="input-box-profile">
                        <input type={confirmVisisble?"text":"password"} 
                        placeholder="XXXXXXXXXX" id="typing"
                        value={updateDetails.cpassword}
                        onChange={(e)=>setUpdateDetails({...updateDetails, cpassword:e.target.value})}
                        />
                    </div>
                    <GetStartedBtn 
                    btn={confirmVisisble?"Hide Confirm Password":"Show Confirm password"}
                    onClick={handleConfirmVisible}
                    />
                </div>
                <GetStartedBtn extraClass="ms-auto" 
                btn="Confirm change password"
                onClick={handleSetPassword}
                />
            </div>
            <ToastContainer/>
         </div>
    <Footer extraClass="scale-font" />
        </>
    )
}