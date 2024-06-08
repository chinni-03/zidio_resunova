import React from "react";
import Navbar from "../Navbar";
import LandingPage from "./LandingPage";
import Band from "./Band";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "../Footer";

function Homepage() {
    return (
        <>
        <Navbar />
        <LandingPage />
        <Band />
        <Section2 />
        <Section3 />
        <Footer />
        </>
    )
}

export default Homepage;