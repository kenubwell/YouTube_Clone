import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {
    return (  
        <div><iframe id="ytplayer" type="text/html" width="500" height="360"
        src="https://www.youtube.com/embed/lLWEXRAnQd0"
        frameborder="0"></iframe></div>
    );
}
 
export default VideoPlayer;
