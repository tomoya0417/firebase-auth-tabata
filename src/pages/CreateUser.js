import React from 'react';
import { useHistory } from 'react-router';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';


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
            <TextField id="standard-basic" label="email" variant="standard" /><br/>
            <TextField id="standard-basic" label="password" variant="standard" /><br/>

            <button onClick ={toMain}>アカウント作成</button><br/>
            <Link onClick ={toLogin}>LOGIN</Link>
        </div>
    );};

export default CreateUser;