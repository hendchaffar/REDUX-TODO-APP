import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addtask} from '../const/Action'


function Addtask() {
    const [input, setinput] = useState('')
    const dispatch = useDispatch()

    const handleAdd=()=>{
        const newTask={
            id:Math.random(),
            description:input,
            isDone: false
        } 

    dispatch(addtask(newTask))
    setinput('')

        }
    return (
        <div>
            <input type='text' value={input} onChange={e=>setinput(e.target.value)}/>
            <button onClick={handleAdd} >Add</button>
        </div>
    )
    }
export default Addtask
