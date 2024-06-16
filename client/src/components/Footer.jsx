import React from "react";
import logo from '../assets/images/resunova-logo.png';
import mail from '../assets/images/mail.png';
import copyright from '../assets/images/copyright.png';
import send from '../assets/images/send.png';
import next from '../assets/images/next.png';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="feedback">
                <div className="caption">
                    <p className="fb-caption">Got a feedback? Drop them here</p>
                    <img src={next} alt="next" />
                </div>
                <Link to={'/feedback'} className="fb-station">
                    <p>Feedback Station</p>
                    <img src={send} alt="fb" />
                </Link>
            </div>
            <div className="mission">
                <div className="mission-txt">
                    <Link to={'/'}>
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                            <a href="/" className="navbar-brand brand fit-content">ResuNova</a>
                        </div>
                    </Link>
                    <div className="txt">We are indie developers based in India. <br />
                    Our mission: Empower job seekers worldwide. Make their journey smoother and more successful.</div>
                </div>
                <div className="tools">
                    <p>Career Tools</p>
                    <ul>
                        <Link to={'/personal-details'}><li>Resume Builder</li></Link>
                    </ul>
                </div>
            </div>
            <div className="contact">
                <p className="contact-caption">Got queries? Drop a mail right away!</p>
                <a href="mailto:support@resunova.com">support@resunova.com <img src={mail} alt="" /></a>
            </div>
            <div className="copyright">
                <img src={copyright} alt="copyright" />
                <p>2024 Harshini Vijendra Kumar (to be changed)</p> {/* to be changed */}
            </div>
        </div>
        </>
    )
}

export default Footer;