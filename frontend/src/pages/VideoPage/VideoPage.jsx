import React, { useContext, useEffect, useState } from "react";
// import AuthContext from "../../context/AuthContext";
// import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {



  return (
    <div>
      <div className="video-reg-contain"><Link to="/register" ><b>Register Here</b></Link></div>
      <div><SearchBar/></div>
      <div className = 'video-contain'>
        <div className="video-container">
            <div>
              <VideoPlayer />
            </div>
            <div>
              <VideoPlayer/>
            </div>
            <div>
              <img src ="/images/bmore3.jpg"/>
            </div>
            <div>
              <img src ="/images/bmore4.jpg"/>
            </div>
            <div>
              <img src ="/images/bmore5.jpg"/>
            </div>
            <div>
              <img src ="/images/bmore6.jpg"/>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default VideoPage;



//notes:

  // const[videoResults,setVideos] = useState([""]);

  // useEffect(() =>{
  //   getVideos()
  // }, [])

  // async function getVideos(){
  //   let response= await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=bobross&type=video&maxResults=6&)
  //   console.log(response.data)
  //   setVideos(response.data)
  // }