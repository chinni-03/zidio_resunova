import React from "react";

function GetStartedBtn(props) {
    return(
        <>
        <a className={`nav-link get-started ${props.extraClass}`} aria-current="page" href="#">{props.btn}</a>
        </>
    )
}

export default GetStartedBtn;