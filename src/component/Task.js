import React from 'react'
import { useDispatch } from 'react-redux'
import {delatetask} from '../const/Action'
import {completetask} from '../const/Action'
import EditTask from "./EditTask";
function Task({el}) {
const dispatch = useDispatch()

const delate=()=>{
    dispatch(delatetask(el.id))
}
const complete=()=>{
    dispatch(completetask(el.id))
}
    return (
        <div>
            <p style={(el.isDone) ? {textDecoration:'line-through'} : {textDecoration:'none'}}>{el.description}</p>
            <EditTask el={el}/>
            
            <button  className="addBtn" onClick={complete}>{(el.isDone) ? "UnDone":"Done"}</button> <br/>
            <button className="addBtn" onClick={delate} >Delete</button>
        </div>
    )
}

export default Task
