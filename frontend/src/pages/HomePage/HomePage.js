import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import CommentForm from "../../components/CommentForm/CommentForm";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();


  return (
    <div>
      <div><SearchBar/></div>
      <div>
        <div><CommentForm/></div>
      </div>
      <div>
        <div>This is where we place Related Videos</div>
      </div>
    </div>
  );
};

export default HomePage;
