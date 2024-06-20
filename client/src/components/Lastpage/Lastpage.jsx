import React from "react";
import "../Lastpage/Lastpage.css";
import happy from '../../assets/images/happy.png'


export default function Lastpage()
{
    return (
        <>
        <div class="works">
            <div class="left">
                <div class="textline1">
                    <p id="random">
                        THIS IS HOW
                    </p>
                </div>
                <div class="textline2">
                    <p id="random">
                        YOUR RESUME LOOKS!
                    </p>
                </div>
                <div class="smiley">
                    <img src={happy} class="happy" alt=""/>
                </div>
            </div>
            <div class="right">
                <div class="preview"></div>
                <button class="download">
                    <p id="text">DOWNLOAD</p>
                </button>
            </div>
        </div>
        </>
    )
}