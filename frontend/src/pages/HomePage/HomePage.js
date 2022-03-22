import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./HomePage.css";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const HomePage = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getSearchResults();
    getRelatedVideos();
  }, [videoId])


let key = process.env.REACT_APP_API_KEY

async function getSearchResults(searchTerm){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=6&key=${key}`);
  setVideoId(response.data.items[0].id.videoId)
  setSearchResults(response.data.items)

}

async function getRelatedVideos(){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&relatedToVideoId=${videoId}&key=${key}`);
  setRelatedVideos(response.data.items)
}


  return (
    <div>
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'home-flex-contain'>
        <div>
          <div className='home-video-player'><VideoPlayer videoId = {videoId}/></div>
          <div className='home-comment-form'><CommentForm/></div>
        </div>
        <div>
          <div className='home-related'><RelatedVideos relatedVideos={relatedVideos}/></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
