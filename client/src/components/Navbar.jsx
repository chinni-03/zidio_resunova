import React from "react";
import { Link } from "react-router-dom";
import enter from '../assets/images/enter.png';
import logo from '../assets/images/resunova-logo.png';

function Navbar() {
    return (
        <>
            <div className="nav">
                <nav class="navbar navbar-expand-lg bg-light-green">
                    <div class="container-fluid">
                        <div className="fit-content">
                            <img src={logo} alt="resunova-logo" />
                            <a class="navbar-brand brand fit-content" href="/">ResuNova</a>
                        </div>
                        <div className="right-nav">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item nav-right">
                                        <a class="nav-link" aria-current="page" href="/developers">Developers</a>
                                    </li>
                                    <li class="nav-item nav-right">
                                        <a class="nav-link" aria-current="page" href="/signup">Get started</a>
                                    </li>
                                </ul>
                                <form class="d-flex nav-btn" role="search">
                                    <Link to={'/signup'}>
                                        <button class="btn" type="submit">
                                            <img className="enter" src={enter} alt="" />
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;