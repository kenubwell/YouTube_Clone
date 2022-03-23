import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./HomePage.css";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from "../../components/Comment/Comment";

const HomePage = () => {

  let key = process.env.REACT_APP_API_KEY

  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    getSearchResults();
    getRelatedVideos();
    getAllComments();
    postComment();
  }, [videoId])


async function getSearchResults(searchTerm){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=6&key=${key}`);
  setVideoId(response.data.items[0].id.videoId)
  setDescription(response.data.items[0].snippet.description)
  setTitle(response.data.items[0].snippet.title)
  setSearchResults(response.data.items)

}

async function getRelatedVideos(){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&relatedToVideoId=${videoId}&key=${key}`);
  setRelatedVideos(response.data.items)
}


async function getAllComments(){
  let response = await axios.get(`http://127.0.0.1:8000/comment/${videoId}/`);
  setAllComments(response.data)
}



async function postComment(text){
  let newComment = {
    video_id: videoId,
    text: text,
  }
  let response = await axios.post("http://127.0.0.1:8000/comment/", newComment);
  setComment(response.data)
  getAllComments();
}


  return (
    <div>
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'home-flex-contain'>
        <div>
          <div className='home-video-player'><VideoPlayer videoId = {videoId} description = {description} title = {title}/></div>
          <div className='home-comment-form'><CommentForm postComment = {postComment}/></div>
          <div><Comment allComments = {allComments}/></div>
        </div>
        <div>
          <div className='home-related'><RelatedVideos relatedVideos={relatedVideos}/></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
