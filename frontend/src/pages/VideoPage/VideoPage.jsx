import React, { useContext, useEffect } from "react";
// import AuthContext from "../../context/AuthContext";
// import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./VideoPage.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const VideoPage = () => {


  return (
    <div>
      <div className="video-reg-contain"><Link to="/register" ><b>Register Here</b></Link></div>
      <div><SearchBar/></div> 
    </div>
  );
};

export default VideoPage;
