import React from "react";
import './CommentList.css';
import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return (  
        <div>
        {props.allComments.map((comment, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div className = 'comm-list-contain'key = {index}>
                <div className="list-text">Username: {comment.id}</div>
                <div className="list-text">Comment: {comment.text}</div>
                <div><Comment/></div>
            </div>
        )
        })}
        </div>   
    );
}

export default CommentList;
