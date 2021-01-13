import {ADDTASK,DELATE,COMPLETE,EDITTASK,SEEALL,SEEDONE,SEEUNDONE, FILTERTASK  } from "./ActionType";

const initState={
    tasks:[{id:1,description:"HELLO WORLD",isDone:false}],
    tab:'ALL'
}
const Reducer=(state=initState,action)=>{
switch(action.type){
    case ADDTASK:
        return{...state,tasks:[...state.tasks,action.payload]};

    case DELATE:
        return{...state,tasks:[...state.tasks.filter(tasks=>tasks.id!==action.payload)]};  

    case COMPLETE:
        return{...state,tasks:[...state.tasks.map(tasks=>tasks.id===action.payload?{...tasks,isDone:!tasks.isDone}:tasks )]};
        
    case EDITTASK:
        return{...state,tasks:[...state.tasks.map(el=>el.id===action.payload.index?{...el,description:action.payload.editedText}:el)]};
    
    // case SEEALL:
    //    /* return {...state,tab:state.tasks,
    //         tasks:state.tab.map()}*/
    //         return {...state}

    // case SEEDONE:
    //     let newstate = {...state,tasks:state.tasks.filter(el=>el.isDone)}
    //     return newstate;
       
    // case SEEUNDONE:
    //     let ahmed = {...state,tasks:state.tasks.filter(el=>!el.isDone)}
    //     return ahmed ;  
case FILTERTASK:
    return{
        ...state,
        tab:action.payload
    }
    default: 
return state
}
}
export default Reducer