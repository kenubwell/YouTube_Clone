import React, { useState } from 'react';
import {GoThumbsup, GoThumbsdown} from 'react-icons/go';
import './Comment.css';
import Modal from 'react-modal'


const Comment = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    async function postLike(){

    }

    async function postDisLike(){

    }

    return (  
        <div>
            <div className='button-contain'>
                <div className = 'like-buttons'><button onClick={postLike}><GoThumbsup/></button></div>
                <div className = 'like-buttons'><button onClick={postDisLike}><GoThumbsdown/></button></div>
            </div>
            <div>
                <button type='submit' className='comment-reply' onClick={() => setModalIsOpen(true)}>Reply</button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal-back'>
                <form>
                    <div>
                        <label htmlFor="Reply" className='reply-text'>Reply:{" "}</label>
                        <input type= "text" id = 'Reply' className='reply-input'/>
                    </div>
                    <div>
                        <button type = 'submit' onClick={() => setModalIsOpen(false)} className='reply-post'>Post</button>
                    </div>
                </form>
            </Modal>
            <div className='likes-text'>Likes:</div>
            <div className='likes-text'>Dislikes:</div>
        </div>
 
    );
}
 
export default Comment;