import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import CommentForm from "../../components/CommentForm/CommentForm";
import "./HomePage.css";

const HomePage = () => {

const [searchResults, setSearchResults] = useState("");

useEffect(() => {
  getSearchResults()
}, [])


let key = process.env.REACT_APP_API_KEY

async function getSearchResults(searchTerm){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=6&key=${key}`);
  console.log(response.data) //will delete later
  setSearchResults(response.data)

}


  return (
    <div>
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'home-flex-contain'>
        <div><CommentForm/></div>
        <div>This is where we place Related Videos</div>
      </div>
    </div>
  );
};

export default HomePage;
