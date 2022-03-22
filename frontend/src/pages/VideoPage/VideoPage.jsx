import React, {useEffect, useState } from "react";
// import AuthContext from "../../context/AuthContext";
// import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
  
  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState([""]);
  

  useEffect(() => {
    getSearchResults();
  },[videoId])


  let key = process.env.REACT_APP_API_KEY

  async function getSearchResults(searchTerm='programming'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=6&key=AIzaSyDVQlyvw2k-xYN3K078IKgdz39tzDlmmhQ`);
  setVideoId(response.data.items[0,1,2,3,4,5].id.videoId)
  setSearchResults(response.data.items)
  console.log(response.data.items)
  }



  

  return (
    <div>
      <div className="video-reg-contain"><Link to="/register" ><b>Register Here</b></Link></div>
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'video-contain'>
        <div className="video-container">
            <div>
              <VideoPlayer videoId={videoId[0]} />
            </div>
            <div>
              <VideoPlayer videoId={videoId[1]}/>
            </div>
            <div>
              <VideoPlayer videoId={videoId[2]}/>
            </div>
            <div>
              <VideoPlayer videoId={videoId[3]}/>
            </div>
            <div>
              <VideoPlayer videoId={videoId[4]}/>
            </div>
            <div>
              <VideoPlayer videoId={videoId[5]}/>
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