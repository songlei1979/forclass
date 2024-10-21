import React from 'react';

function SecondComponent(props) {
    function clickMe() {
        alert('You clicked me!');
    }

    return (
        <div>
            <h1>The second component</h1>
            <button onClick={clickMe}>
                Click Me
            </button>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <button onClick={props.clickMe}>Click Me</button>
        </div>
    );
}

export default SecondComponent;