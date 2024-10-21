import React, {Fragment, useState} from 'react';

function Decision(props) {
    const [name, setName] = useState("Lei Song")

    function changeName() {
        {name === "Lei Song" ?
            setName("Gerard Lovell") :
            setName("Lei Song")}
    }
    return (
            <Fragment>
            <h1>Hello {name}</h1>
            <button onClick={changeName}>Change Name</button>
            <p>{props.tempurature<20? <p>too cold</p>:<p>too hot</p>}</p>
            </Fragment>

    );
}

export default Decision;