import React,{useState} from 'react';
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { login,google } from '../config/firebase';

const Login = () =>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const history = useHistory()

const toLogin = async () => {
    const result2 = await login(email, password)
    console.log("🚀 ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result", result2)
     if (result2 === "success") {
    history.push('/main')
    } else 
    {
    setError("LOGINに失敗しました。")
    }
}

const toCreateUser = () => {
    history.push('/createUser')
}

const toGoogle = async () =>{
    const result3 = await google()
    console.log("🚀 ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result3", result3)
    if (result3 === "success") {
        history.push('/Main')
        console.log("Provider")
    }else if (result3 === "error") {
        setError("ログインに失敗しました。")
    }else{
    console.log("aaa")
}}


    return (
      <div>
          <h1>ログイン</h1>
          <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
          <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
          
          <button onClick = {toLogin}>LOGIN</button><br/>
          <Link onClick ={toCreateUser}>アカウント作成</Link><br/>
          <Link onClick={toGoogle}>Google</Link>
          <div>{error}</div>
      </div>
    );
};

export default Login;