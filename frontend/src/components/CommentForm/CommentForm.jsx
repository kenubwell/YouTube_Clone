import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CommentForm.css";

let initialValues = {
  video_id: "",
  text: "",
};

const CommentForm = () => {
  const [user, token] = useAuth()
  const navigate = useNavigate()

  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewComment);

  async function postNewComment(){
    try {
      let response = await axios.post("http://127.0.0.1:8000/comment/", formData,{
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      navigate("/")
    } catch (error) {
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="Comment">Comment:{" "}</label>
            <input type="text" id = 'Comment' value={formData.text} onChange={handleInputChange}/>
        </div>
        <div>
            <button type = 'submit'>Post</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
