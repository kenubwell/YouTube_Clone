import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {

    let jssrc = `https://www.youtube.com/embed/${props.videoId}`

    return (  
        <div>
            <iframe id="ytplayer" type="text/html" width="500" height="360"
                src= {jssrc}
                frameborder="0">
            </iframe>
            <div className = "video-title"><h5>Title: {props.title}</h5></div>
            <div className = "video-description"><h5>Description: {props.description}</h5></div>
        </div>

    );
}
 
export default VideoPlayer;
