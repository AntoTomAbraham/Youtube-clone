import { Avatar } from '@material-ui/core'
import React from 'react'
import "./VideoCard.css"

function VideoCard({image,title,channel,timestamp,channelimage,views}) {
    return (
        <div className="videocard">
            <img className="videocard_thumbnail" src={image} alt=""/>
            <div className="videocard_info">
                <Avatar className="ideo_avatar" src={channelimage} alt={channel}/>
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} * {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
