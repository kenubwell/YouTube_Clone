import React from "react";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
    return (  
        <div>
            <h2>Related Videos</h2>
            {props.relatedVideos.map((element, index) => {
                if (element.snippet){
                    return (<img key ={index} onClick={() => props.setVideoId(element.id.videoId)} src= {element.snippet.thumbnails.default.url}></img>)
                }
                else{
                    return <div></div>
                }
            })}
        </div>
    );
}
 
export default RelatedVideos;