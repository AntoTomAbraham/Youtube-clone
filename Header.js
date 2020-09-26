import React, {useState} from 'react';
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon />
            <Link to="/">
            <img className="header_logo" src="https://www.flaticon.com/svg/static/icons/svg/1384/1384060.svg" alt=""/>
            </Link>
            
            </div>
            <div className="header_input">
            <input 
            onChange={(e) => setInputSearch(e.target.value)} 
            value={inputSearch} 
            placeholder="Search" 
            type="text"/>
            <Link to={'/search:/${inputSearch}'}>
                  <SearchIcon className="header_inputbutton"/>
            </Link>
            </div>
            <div className="header_icons">
            <VideoCallIcon className="header_icon" />
            <AppsIcon className="header_icon" />
            <NotificationsIcon className="header_icon" />
            <Avatar className="header_icon"  
            src="https://yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s900-c-k-c0xffffffff-no-rj-mo"
            />
            </div>
        </div>
    )
}

export default Header
