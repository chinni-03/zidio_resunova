import React from "react";
import download from '../assets/images/download-green.png';
import downloadHover from '../assets/images/download.png';
import {Link} from 'react-router-dom'

export default function RoundBtn() {

    const changeBtn = () => {
        document.getElementById('download-resume').src = downloadHover;
        document.getElementById('download-btn').style.background = '#00582F';
    }

    const  changeBack = () => {
        document.getElementById('download-resume').src = download;
        document.getElementById('download-btn').style.background = 'transparent';
    }

    return (
        <>
        <Link to={'/download-resume'}>
            <button type="button" id="download-btn" className="round-btn-white" onMouseOver={changeBtn} onMouseLeave={changeBack}>
                <img src={download} alt="" id="download-resume" />
            </button>
        </Link>
        </>
    )
}