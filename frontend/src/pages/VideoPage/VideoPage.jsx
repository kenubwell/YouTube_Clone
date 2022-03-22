import React, {useEffect, useState } from "react";
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

  async function getSearchResults(searchTerm='welcome to youtube'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=1&key=AIzaSyDVQlyvw2k-xYN3K078IKgdz39tzDlmmhQ`);
  setVideoId(response.data.items[0].id.videoId)
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
              <VideoPlayer videoId={videoId} />
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