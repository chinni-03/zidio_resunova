import React from "react";
import user from '../../assets/images/user.png';
import Nav from "../Builder/Nav";
import '../Profile/Profile.css';
import Footer from "../Footer";
import GetStartedBtn from "../homepage/GetStartedBtn";

export default function Profile() {
    return (
        <>
         <Nav />
         <div className="profile-page">
            <div className="profile-det">
                <div class="biglogo">
                    <img src={user} class="blogo" alt=""/>
                </div>
                <div class="profile-name">
                    <p id="username">Name of the User</p>
                </div>
                <div class="profile-section">
                    <div class="profile-label">Email Address : </div>
                    <div class="input-box-profile">
                        <input type="email" placeholder="abcdefg123@gmail.com" id="typing"/>
                    </div>
                <GetStartedBtn btn="Change email-address"/>
                </div>
                <div class="profile-section">
                    <div class="profile-label pass">Old Password : </div>
                    <div class="input-box-profile">
                        <input type="password" placeholder="XXXXXXXXXX" id="typing"/>
                    </div>
                    <GetStartedBtn btn="Show old password"/>
                </div>
                <div class="profile-section">
                    <div class="profile-label pass">New Password : </div>
                    <div class="input-box-profile">
                        <input type="password" placeholder="XXXXXXXXXX" disabled id="typing"/>
                    </div>
                    <GetStartedBtn btn="Show new password"/>
                </div>
                <GetStartedBtn extraClass="ms-auto" btn="Confirm change password"/>
            </div>
         </div>
    <Footer extraClass="scale-font" />
        </>
    )
}