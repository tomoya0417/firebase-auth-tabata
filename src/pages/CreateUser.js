import React,{useState} from 'react';
import { useHistory } from 'react-router';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { createUser } from '../config/firebase';


const CreateUser = () =>{
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const history = useHistory()

const handleClick = async () => {
    const result = await createUser(email, password)
    console.log("🚀 ~ file: CreateUser.js ~ line 13 ~ handleClick ~ result", result)
     if (result) {
    history.push('/main')
    } else {
    setError("User作成に失敗しました。")
    }
    }
        
const toLogin = () => {
    history.push('/')
}

    return (
        <div>
            <h1>CreateUser</h1>
            <TextField id="email" label="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <TextField id="password" label="password" value={password} onChange={e => setPassword(e.target.value)} /><br />

            <button onClick ={handleClick}>アカウント作成</button><br/>
            <Link onClick ={toLogin}>LOGIN</Link>
        </div>
    );};

export default CreateUser;