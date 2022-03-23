import React, { useState } from 'react';
import {GoThumbsup, GoThumbsdown} from 'react-icons/go';
import './Comment.css';


const Comment = (props) => {

    function handleClick(){

    }

    function handleSecondClick(){

    }

    return (  
        <div>
            <div className='button-contain'>
                <div className = 'like-buttons'><button onClick={handleClick}><GoThumbsup/></button></div>
                <div className = 'like-buttons'><button onClick={handleSecondClick}><GoThumbsdown/></button></div>
            </div>
            <div><button type='submit' className='comment-reply'>Reply</button></div>
            <div className='likes-text'>Likes:</div>
            <div className='likes-text'>Dislikes:</div>
        </div>
 
    );
}
 
export default Comment;