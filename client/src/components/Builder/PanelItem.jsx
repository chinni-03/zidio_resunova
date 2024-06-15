import React from "react";

export default function PanelItem(props) {
    return (
        <>
        <div className={`panel-item ${props.extraClass}`}>
            <img src={props.img} alt="" />
        </div>
        </>
    )
}