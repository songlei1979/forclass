import React, {useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../constants";
import {useLocation} from "react-router-dom";

function PostDetail(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category_name, setCategory_name] = useState("")
    const [author, setAuthor] = useState("")
    const [error, setError] = useState("")
    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: baseUrl + 'api/posts/' + id + '/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setTitle(response.data.title);
                setContent(response.data.content);
                setCategory_name(response.data.category_name);
                setAuthor(response.data.author);
                setError("");
            })
            .catch((error) => {
                console.log(error);
                setError(error)
            });
    }, []);


    return (
        <div>
            {error ? <p>{error}</p> : null}

            <h1>{title}</h1>
            <p>{content}</p>
            <p>{category_name}</p>
            <p>{author}</p>
        </div>
    );
}

export default PostDetail;