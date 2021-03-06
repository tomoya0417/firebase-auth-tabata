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
    console.log("π ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result", result2)
     if (result2 === "success") {
    history.push('/main')
    } else 
    {
    setError("LOGINγ«ε€±ζγγΎγγγ")
    }
}

const toCreateUser = () => {
    history.push('/createUser')
}

const toGoogle = async () =>{
    const result3 = await google()
    console.log("π ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result3", result3)
    if (result3 === "success") {
        history.push('/Main')
        console.log("Provider")
    }else if (result3 === "error") {
        history.push('/Main')
        setError("γ­γ°γ€γ³γ«ε€±ζγγΎγγγ")
    }else{
    console.log("aaa")
}}


    return (
      <div>
          <h1>γ­γ°γ€γ³</h1>
          <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
          <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
          
          <button onClick = {toLogin}>LOGIN</button><br/>
          <Link onClick ={toCreateUser}>γ’γ«γ¦γ³γδ½ζ</Link><br/>
          <Link onClick={toGoogle}>Google</Link>
          <div>{error}</div>
      </div>
    );
};

export default Login;