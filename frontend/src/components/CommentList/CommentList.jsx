import React from "react";
import './CommentList.css';
import Comment from "../Comment/Comment";

const CommentList = (props) => {
 
        return (
            <div className="comm-list-contain">
                <div className="list-text">Username:</div>
                <div className="list-text">Comment:</div>
                <div><Comment/></div>
            </div>
        )
}

export default CommentList;


// {props.allComments.map((comment, index) => { 
//     return (
//         <div className="comm-list-contain" key = {index}>
//             <div><p>{comment.user.username}</p></div>
//             <div><p>{comment.text}</p></div>
//             <div><Comment/></div>
//         </div>
//     )
//     })}