import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../constants";
import {Link} from "react-router-dom";

function Posts(props) {
    const [token, setToken] = useState("")
    const [loginStatus, setLoginStatus] = useState(false)
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")
    const [author, setAuthor] = useState(0)

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setLoginStatus(true);
            setToken(localStorage.getItem('token'));
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: baseUrl + 'api/get_user_id/',
                headers: {
                    'Authorization': 'token ' + localStorage.getItem('token')
                }
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setAuthor(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: baseUrl + 'api/posts/',
            headers: {

            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPosts(response.data);
                setError("");
            })
            .catch((error) => {
                console.log(error);
                setPosts([]);
                setError(error)
            });

    }, [posts, loginStatus]);

    function deletePost(id) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: baseUrl + 'api/posts/' + id + '/',
            headers: {
                'Authorization': 'token ' + token
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Posts</h1>
            {error ? <p>{error}</p> : null}

            {posts.map((post) => (
                <div key={post.id}>
                    <Link to={`/post_detail/`} state={{id: post.id}}>
                        {post.title}
                    </Link>
                    {post.author === author ?
                        <div>
                            <button>Update</button>
                            <button onClick={deletePost.bind(this, post.id)}>Delete</button>
                        </div>
                        : null}
                </div>
            ))}
        </div>
    );
}

export default Posts;