import React from "react";
import { Link } from "react-router-dom";
import GetStartedBtn from "../homepage/GetStartedBtn";
import profile from '../../assets/images/user.png';
import logo from '../../assets/images/resunova-logo.png';

export default function Nav() {
    return (
        <>
        <div className="nav">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid w-100">
                    <div className="fit-content plain-bar">
                        <Link to={'/'}>
                            <div className="logo-plain">
                                <img src={logo} alt="resunova-logo" />
                                <a class="navbar-brand brand fit-content" href="#">ResuNova</a>
                            </div>
                        </Link>
                        <div className="right-nav">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <Link to={'/signin'}><GetStartedBtn extraClass="sign-out" btn="Sign out" /></Link>
                                <img src={profile} alt="profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}