import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./CommentForm.css";

const CommentForm = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    text: "",
    video_id: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

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
