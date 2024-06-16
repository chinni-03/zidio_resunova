import React from "react";
import user from '../../assets/images/user.png';
import Nav from "../Builder/Nav";
import '../Profile/Profile.css';
import Footer from "../Footer";

export default function Profile() {
    return (
        <>
         <Nav />
         <div className="profile-page">
         <div class="biglogo">
        <img src={user} class="blogo" alt=""/>
    </div>
    <div class="name">
        <p id="username">Name Of The User</p>
    </div>
    <div class="email">
        <div class="emailtext">Email Address : </div>
        <div class="input-box">
            <input type="email" placeholder="abcdefg123@gmail.com" id="typing"/>
        </div>
       <button class="emailbutton">
            <p id="changeemail">change email address</p>
       </button>
    </div>
    <div class="password">
        <div class="passtext">Password : </div>
        <div class="input-box">
            <input type="password" placeholder="XXXXXXXXXX" id="typing"/>
        </div>
       <button class="passbutton">
            <p id="showpass">Show password</p>
       </button>
    </div>
    <div class="blank">
        <button class="changepassbutt">
            <p id="changepass">Change Password</p>
        </button>
    </div>
         </div>
    <Footer />
        </>
    )
}