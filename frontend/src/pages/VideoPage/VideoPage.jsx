import React, { useContext, useEffect } from "react";
// import AuthContext from "../../context/AuthContext";
// import useCustomForm from "../../hooks/useCustomForm";
// import { Link } from "react-router-dom";
import "./VideoPage.css";

const VideoPage = () => {

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div>
        Search Page....TBD
    </div>
  );
};

export default VideoPage;
