import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Novo Comentário</label>
                <input
                    type="text"
                    className='form-control'
                    value={content || ''} 
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type='submit' className='btn btn-primary'>Comentar</button>
            </div>
        </form>
    </div>
  )
}

export default CommentCreate