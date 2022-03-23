import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

let key = process.env.REACT_APP_API_KEY

const VideoPage = () => {
  
  const [searchResults, setSearchResults] = useState('');
  const [videoId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  

  useEffect(() => {
    getSearchResults();
  },[])


  async function getSearchResults(searchTerm='welcome to youtube'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=1&key=${key}`);
  setVideoId(response.data.items[0].id.videoId)
  setDescription(response.data.items[0].snippet.description)
  setTitle(response.data.items[0].snippet.title)
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
              <div className='landing-page-video-player'><VideoPlayer videoId={videoId} description={description} title={title}/></div>
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