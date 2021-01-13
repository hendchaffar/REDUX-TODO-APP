  
import React from 'react'
import {useDispatch} from 'react-redux'
import { filterTask, seeall, seedone, seeundone } from '../const/Action'

const Filter = () => {
    const dispatch = useDispatch()

    const seeA=()=>{
        dispatch(filterTask("ALL"))

    }
    const seeDo=()=>{
        dispatch(filterTask("DONE"))

    }
    const seeUd=()=>{
        dispatch(filterTask("NOTDONE"))

    }
    

    return (
        <div >
            <button className='filter' onClick={seeA}> all</button>
            <button className='filter' onClick={seeDo}> done</button>
            <button className='filter' onClick={seeUd}> undone</button>
        </div>
    )
}

export default Filter