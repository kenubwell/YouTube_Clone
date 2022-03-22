import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {

    let jssrc = `https://www.youtube.com/embed/${props.videoId}`

    return (  
        <div><iframe id="ytplayer" type="text/html" width="500" height="360"
        src= {jssrc}
        frameborder="0"></iframe></div>
    );
}
 
export default VideoPlayer;
