import React from 'react';
import { useHistory } from "react-router";

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
          
          <button onClick = {toCreateUser}>CreateUserへ</button>
          <button onClick = {toMain}>Mainへ</button>
      </div>
    );};

export default Login;