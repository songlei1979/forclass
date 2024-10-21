import React, {useEffect, useReducer} from 'react';
import axios from "axios";

const initialState = {
    posts: [],
    loading: false,
    error: ''
}

function reducer(state, action) {
    switch (action.type) {
        case 'Success':
            return {loading: false, posts: action.payload, error: ''}
        case 'Error':
            return {loading: false, posts: [], error: 'Something went wrong'}
    }
}
function FetchDataReducer(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch({type: 'Success', payload: response.data})
            })
            .catch(error => {
                dispatch({type: 'Error'})
            })
    }, [state.posts])

    return (
        <div>
            {state.loading ? <p>Loading...</p> : state.posts.map(post =>{
                return(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>)
            })}


            {state.error ? <p>{state.error}</p> : null}
        </div>
    );
}

export default FetchDataReducer;