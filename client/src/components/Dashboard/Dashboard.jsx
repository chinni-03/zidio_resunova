import React, { useEffect } from "react";
import "../Dashboard/Dashboard.css";
import logo from '../../assets/images/resunova-logo.png';
import user from '../../assets/images/user.png';
import resume from '../../assets/images/resume.png';
import letter from '../../assets/images/cover-letter.png';
import Nav from "../Builder/Nav";
import Footer from "../Footer";
import { useDashboard } from "../../context/dashboard";
import { useParams } from "react-router-dom";

export default function Dashboard() {
    const {id} = useParams();
    const {loggedIn, checkTokenExpiry} = useDashboard();

    useEffect(() => {
        document.title = "Dashboard"
    })

    useEffect(() => {
        checkTokenExpiry();
        if(id){
            loggedIn(id)
        }
    }, [id,checkTokenExpiry]);


    return (
        <>
        <Nav />
        <div className="dash">
            <div class="bigtext">
                <p id="create">What shall we create today?</p>
            </div>
            <div class="product">
                <a class="cards" href="/personal-details">
                    <div class="resume">
                        <img src={resume} className="logo1" alt="" />
                    </div>
                    <div class="caption">Resume
                    </div>
                </a>
            </div>
        </div>
        <Footer />
        </>
    )
}