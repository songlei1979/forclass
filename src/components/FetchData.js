import React, {useEffect, useState} from 'react';
import axios from 'axios';

function FetchData(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
            })
    }, [posts]);

    return (
        <div>
            {posts.length===0? <p>Loading...</p> :
            posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default FetchData;