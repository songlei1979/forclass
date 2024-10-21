import React, {useState} from 'react';

function Form(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }
    return (
        <div>
            <input name={'username'}
                   type={'text'}
                   placeholder={'Username'}
                   onChange={usernameHandler}
            />
            <p>Username: {username}</p>
            <input name={'password'}
                   type={'password'}
                   onChange={passwordHandler}
                   />
            <p>Password: {password}</p>
        </div>
    );
}

export default Form;