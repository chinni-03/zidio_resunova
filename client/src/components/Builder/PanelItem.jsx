import React from "react";

export default function PanelItem({img, extraClass}) {
    return (
        <div className={`panel-item ${extraClass}`}>
            <img src={img} alt="" />
        </div>
    );
}