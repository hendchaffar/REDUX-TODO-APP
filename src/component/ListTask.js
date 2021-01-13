import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

function ListTask() {
    const  task = useSelector(state => state)
    
    return (
        <div>
        {task.tab==='ALL'?
        task.tasks.map((el,i) => <Task el={el} key={i}/>):
        task.tab==='DONE'?task.tasks.filter(el=>el.isDone).map((el,i) => <Task el={el} key={i}/>):task.tasks.filter(el=>!el.isDone).map((el,i) => <Task el={el} key={i}/>)
        }
        </div>
    )
}

export default ListTask
