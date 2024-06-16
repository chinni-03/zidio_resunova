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
    const {data, loggedIn, checkexpiry} = useDashboard();
    const {id} = useParams();

    useEffect(() => {
        document.title = "Sign In"
    })
    useEffect(() => {
        const tokenCheckInterval = setInterval(checkexpiry, 1000 * 60 * 60);

        return () => clearInterval(tokenCheckInterval);
    }, [checkexpiry]);

    useEffect(()=>{
        if(id){
            loggedIn(id)
        }
    },[id,loggedIn])

    useEffect(() => {
        document.title = "Dashboard"
    })

    return (
        <>
        <Nav data={data} checkexpiry={checkexpiry} />
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
                <div class="cards">
                    <div class="covlogo">
                        <img src={letter} alt="" className="logo2" />
                    </div>
                    <div class="caption cov">Cover-Letter
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}