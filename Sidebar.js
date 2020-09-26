import { ExpandMoreOutlined, OndemandVideo, Subscriptions, ThumbUpAltOutlined, VideoLibrary, Whatshot } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SideBarRow from "./SideBarRow.js";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar() {
    return (
        <div className="sidebar">
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon ={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SideBarRow Icon={VideoLibraryIcon} title="Library"/>
            <SideBarRow Icon={HistoryIcon} title="History"/>
            <SideBarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
        </div>
    )
}

export default Sidebar
