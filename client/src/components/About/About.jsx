import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../About/About.css';
import logo from '../../assets/images/resunova-logo.png';
import harshini from '../../assets/images/harshini.png';
import amit from '../../assets/images/amit.png';

 export default function About() {
    return (
        <>
        <div class="aboutus">
            <Navbar />
            <div class="text">Welcome to ResuNova!</div>
            <div className="resu-desc">
                <img src={logo} alt="" />
                <div>
                    <p className="resu-des">
                    We are a passionate team of indie developers based in India, dedicated to empowering job seekers around the globe. At ResuNova, we understand that the job market can be a challenging and competitive landscape. Our mission is to make your journey smoother and more successful by providing you with the tools and resources needed to create standout resumes.
                    <br />
                    Whether you're a recent graduate, a seasoned professional, or someone looking to make a career change, ResuNova is here to support you every step of the way. With our intuitive and user-friendly platform, crafting the perfect resume has never been easier. Join us and take the first step towards your dream job with confidence and style.
                    </p>
                </div>
            </div>
            <div class="text">Developers</div>
            <div class="Harshini">
                <img src={harshini} class="pic" alt=""/>
                <div class="text-des">
                    <p className="desig">
                        Harshini Vijendra Kumar <br />
                        <span>UI/UX Designer & Frontend Developer</span>
                    </p>
                </div>
            </div>
            <div class="Rohan">
                <div class="text-des">
                <p className="desig">
                        Rohan Paul <br />
                        <span>Frontend Developer</span>
                    </p>
                </div>
                <img src={amit} class="pic" alt=""/>
            </div>
            <div class="Amit">
                <img src={amit} class="pic" alt=""/>
                <div class="text-des">
                <p className="desig">
                        Amit Vishwakarma <br />
                        <span>Full-Stack Developer</span>
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
 }