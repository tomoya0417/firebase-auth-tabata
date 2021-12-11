import React from 'react';
import { useHistory } from "react-router";
import {createDataInFirebase, readData} from '../config/firebase';
import Button from '@material-ui/core/Button';

const Main = () =>{
const createFunc = async () =>{
    console.log('start')
    const res = await createDataInFirebase()
    console.log('fin', res)
}

const read = async () =>{
    console.log("read")
    await readData()
}

return (
    <div>
        <h1>Main画面</h1>
            <Button onClick={createFunc}>DBへ保存</Button>
            <Button onClick={read}>DB読み取り</Button>
    </div>
);};

export default Main;