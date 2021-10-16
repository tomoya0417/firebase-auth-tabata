import React from 'react';
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

const Login = () =>{

const history = useHistory()

const toCreateUser = () => {
    history.push('/createUser')
}

const　toMain = () => {
    history.push('/Main')
}

    return (
      <div>
          <h1>ログイン</h1>

          <TextField id="standard-basic" label="email" variant="standard" /><br/>
          <TextField id="standard-basic" label="password" variant="standard" /><br/>
          
          <button onClick = {toMain}>LOGIN</button><br/>
          <Link onClick ={toCreateUser}>アカウント作成</Link>
      </div>
    );};

export default Login;