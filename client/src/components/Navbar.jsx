import React from "react";

function Navbar() {
    return (
        <>
            <div className="nav">
                <nav class="navbar navbar-expand-lg bg-light-green">
                    <div class="container-fluid">
                        <div className="fit-content">
                            <img src="/../../images/resunova-logo.png" alt="resunova-logo" />
                            <a class="navbar-brand brand fit-content" href="#">ResuNova</a>
                        </div>
                        <div className="right-nav">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item nav-right">
                                        <a class="nav-link" aria-current="page" href="#">Get started</a>
                                    </li>
                                </ul>
                                <form class="d-flex nav-btn" role="search">
                                    <button class="btn" type="submit"><img className="enter" src="/../../images/enter.png" alt="" /></button>
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