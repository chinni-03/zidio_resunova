import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GetStartedBtn from "../homepage/GetStartedBtn";
import profile from '../../assets/images/user.png';
import logo from '../../assets/images/resunova-logo.png';
import { useDashboard } from "../../context/dashboard";
import { ToastContainer, toast } from "react-toastify";

export default function Nav() {
    const {loggedIn, checkTokenExpiry, data,handleLoggedout} = useDashboard();
    useEffect(() => {
        checkTokenExpiry();
        loggedIn();
    }, [checkTokenExpiry]);

    useEffect(()=>{
        toast.success("You have logged In successfully!")
    },[])

    return (
        <>
            <div className="nav">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid w-100">
                        <div className="fit-content plain-bar">
                            <Link to={'/dashboard'}>
                                <div className="logo-plain">
                                    <img src={logo} alt="resunova-logo" />
                                    <a className="navbar-brand brand fit-content" href="#">ResuNova</a>
                                </div>
                            </Link>
                            <span className="user-name">{data?.name}</span>
                            <div className="right-nav">
                                <button className="navbar-toggler"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <button type="button" onClick={handleLoggedout}>
                                        <GetStartedBtn extraClass="sign-out" btn="Sign out" />
                                    </button>
                                    <Link to={"/profile"}>
                                        <img src={profile} alt="profile" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <ToastContainer/>
            </div>
        </>
    )
}