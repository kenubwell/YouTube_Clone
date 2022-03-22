import React, { useState } from "react";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CommentForm.css";

// let initialValues = {
//   video_id: "",
//   text: "",
// };

const CommentForm = (props) => {

  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    props.postComment(comment);
    setComment('');
}

  return (
    <div>
      <form className="comm-form" onSubmit={handleSubmit}>
        <div>
            <label className = 'comment-label' htmlFor="Comment">Comment:{" "}</label>
            <input type= "text" id = 'Comment' className="comm-input" value = {comment} onChange ={(event) => setComment(event.target.value)} />
        </div>
        <div className="comm-but-contain">
            <button type = 'submit' className="comm-button">Post</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
