import React, {useState} from 'react';

function Datatype(props) {
    const [text, setText] = useState("")
    const [boolean, setBoolean] = useState(true)
    const [list, setList] = useState([])

    function textHandler(e) {
        setText(e.target.value)
    }

    function statusChange() {
        setBoolean(!boolean)
    }

    function addToList() {
        setList([...list, "Add new item"])
    }

    return (
        <div>
            <p>{text}</p>
            <input type="text" onChange={textHandler}/>
            <p>{boolean.toString()}</p>
            <button onClick={statusChange}>Change Status</button>
            {list.map((item) => <p key={item}>{item}</p>)}
            <button onClick={addToList}>Add to list</button>
        </div>
    );
}

export default Datatype;