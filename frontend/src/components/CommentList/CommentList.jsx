import React from "react";
import './CommentList.css';
import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return (  
        <div>
        {props.entryComments.map((post, index) => { //use curly brackets to write JavaScript within HTML. The index will iterate the index values (Note it starts at 0)
        return (
            <div key = {index}>
                <div><p>{post.user}</p></div>
                <div><p>{post.text}</p></div>
                <div><Comment/></div>
            </div>
        )
        })}
        </div>   
    );
}

export default CommentList;