import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./HomePage.css";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CommentList from "../../components/CommentList/CommentList";
import useAuth from "../../hooks/useAuth";


const HomePage = () => {

  let key = process.env.REACT_APP_API_KEY

  const [searchResults, setSearchResults] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [user, token] = useAuth();
 
  useEffect(() => {
    getSearchResults();
  }, [])

  useEffect(() => {
    getRelatedVideos();
    getAllComments();
    postComment();
  }, [videoId])


async function getSearchResults(searchTerm){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${key}`);
  setVideoId(response.data.items[0].id.videoId)
  setDescription(response.data.items[0].snippet.description)
  setTitle(response.data.items[0].snippet.title)
  setSearchResults(response.data.items)

}

async function getRelatedVideos(){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${videoId}&key=${key}`);
  setRelatedVideos(response.data.items)
  console.log(response.data.items)
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
  let response = await axios.post("http://127.0.0.1:8000/comment/", newComment, {
    headers: {
      Authorization: "Bearer " + token,
    },
    }
  );
  setComment(response.data)
  getAllComments();
}


  return (
    <div className="homepage-contain">
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'home-flex-contain'>
        <div>
          <div className='home-video-player'><VideoPlayer videoId = {videoId} description = {description} title = {title}/></div>
          <div className='home-comment-form'><CommentForm postComment = {postComment}/></div>
          <div><CommentList allComments = {allComments}/></div>
        </div>
        <div>
          <div className='home-related'><RelatedVideos relatedVideos={relatedVideos} setVideoId = {setVideoId}/></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
