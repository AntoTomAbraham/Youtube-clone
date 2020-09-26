import React from 'react';
import "./SearchPage.css";
import ChannelRow from "./ChannelRow.js";
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage_filter">
                <TuneOutLinedIcon />
            </div>
            <hr/>
            <ChannelRow
            image
            Channel
            verified
            subs
            noofvideos
            description/>
        </div>
    )
}

export default SearchPage
