import React from 'react';
import "./SideBarRow.css";
import Sidebar from "./Sidebar.js";
function SideBarRow({ Icon ,title}) {
    return (
        <div className={'sidebarrow ${selected && "selected"}'}>
            <Icon className="sidebarrow_icon"/>
            <h2 className="sidebarrow_title">{title}</h2>
        </div>
    )
}

export default SideBarRow
