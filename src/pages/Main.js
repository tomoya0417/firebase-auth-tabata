import { React,useState }from 'react';
import { createDataInFirebase, readData, updateData, deleteData, myDataInFirebase } from '../config/firebase';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';


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

const handleUpdate = async () => {
    await updateData();
    console.log("update")
};

const handleDelete = async () =>{
    await deleteData();
    console.log("delete")
}

const [first, setFirst] = useState()
const [last, setLast]= useState()
const [born, setBorn] = useState()

const myData = async () => {
    myDataInFirebase(first, last, born)
}

return (
    <div>
        <h1>Main画面</h1>

        

        <div >
        　　<TextField label="first" variant="filled" focused onChange={e => setFirst(e.target.value)} />
        　　<TextField label="last" variant="filled" focused onChange={e => setLast(e.target.value)} />
        　　<TextField label="born" variant="filled" focused onChange={e => setBorn(e.target.value)} />
      　</div>
           <Button variant="outlined" color="success" onClick={myData}> MY DATA</Button>

            <Button variant="outlined" onClick={createFunc}>DBへ保存</Button>
            <Button variant="outlined" sonClick={read}>DB読み取り</Button>
            <Button variant="outlined" onClick={handleUpdate}>Update</Button>
            <Button variant="outlined" onClick={handleDelete}>削除</Button>
    </div>
);};

export default Main;