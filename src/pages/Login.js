import React,{useState} from 'react';
import { useHistory } from "react-router";
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { loginUser } from '../config/firebase';

const Login = () =>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const history = useHistory()

const handleClick = async () => {
    const result = await loginUser(email, password)
    console.log("🚀 ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result", result)
     if (result) {
    history.push('/main')
    } else {
    setError("LOGINに失敗しました。")
    }}

const toCreateUser = () => {
    history.push('/createUser')
}

    return (
      <div>
          <h1>ログイン</h1>
          <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
          <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
          
          <button onClick = {handleClick}>LOGIN</button><br/>
          <Link onClick ={toCreateUser}>アカウント作成</Link>
      </div>
    );};

export default Login;