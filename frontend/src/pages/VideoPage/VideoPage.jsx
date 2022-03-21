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
      <div className = 'video-contain'>
        <div className="video-container">
            <div>
              <img src ="/images/bmore1.jpg"/>
            </div>
            <div>
              <img src ="/images/bmore2.jpg"/>
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
