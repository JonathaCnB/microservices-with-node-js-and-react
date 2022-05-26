import React, {useState} from 'react'
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:4000/posts', {
            title
        });
        console.log(res)
        setTitle('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    className='form-control'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
    </div>
  )
}

export default PostCreate