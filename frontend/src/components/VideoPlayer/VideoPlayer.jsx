import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = (props) => {

    let jssrc = `https://www.youtube.com/embed/${props.videoId}`

    return (  
        <div><iframe id="ytplayer" type="text/html" width="1200" height="700"
        src= {jssrc}
        frameborder="0"></iframe></div>
    );
}
 
export default VideoPlayer;
