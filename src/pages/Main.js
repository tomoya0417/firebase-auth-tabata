import React from 'react';
import { useHistory } from "react-router";

const Main = () =>{

const history = useHistory()

const toLogin = () => {
    history.push('/')
}

return (
    <div>
        <h1>Main</h1>
            <button onClick = {toLogin}>Loginへ</button>
    </div>
);};

export default Main;