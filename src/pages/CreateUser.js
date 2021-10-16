import React from 'react';
import { useHistory } from 'react-router';


const CreateUser = () =>{

const history = useHistory()
        
const toLogin = () => {
    history.push('/')
}
        
const　toMain = () => {
    history.push('/Main')
}
        
    return (
        <div>
            <h1>CreateUser</h1>

            <button onClick = {toLogin}>Loginへ</button>
            <button onClick = {toMain}>Mainへ</button>
        </div>
    );};

export default CreateUser;