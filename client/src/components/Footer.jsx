import React from "react";

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="feedback">
                <div className="caption">
                    <p className="fb-caption">Got a feedback? Drop them here</p>
                    <img src="/../../images/next.png" alt="next" />
                </div>
                <a href="#" className="fb-station">
                    <p>Feedback Station</p>
                    <img src="/../../images/send.png" alt="fb" />
                </a>
            </div>
            <div className="mission">
                <div className="mission-txt">
                    <div className="logo">
                        <img src="/../../images/resunova-logo.png" alt="logo" />
                        <a href="/" className="navbar-brand brand fit-content">ResuNova</a>
                    </div>
                    <div className="txt">We are indie developers based in India. <br />
                    Our mission: Empower job seekers worldwide. Make their journey smoother and more successful.</div>
                </div>
                <div className="tools">
                    <p>Career Tools</p>
                    <ul>
                        <li>Resume Builder</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
            <div className="contact">
                <p className="contact-caption">Got queries? Drop a mail right away!</p>
                <a href="mailto:support@resunova.com">support@resunova.com <img src="/../../images/mail.png" alt="" /></a>
            </div>
            <div className="copyright">
                <img src="/../../images/copyright.png" alt="copyright" />
                <p>2024 Harshini Vijendra Kumar (to be changed)</p> {/* to be changed */}
            </div>
        </div>
        </>
    )
}

export default Footer;