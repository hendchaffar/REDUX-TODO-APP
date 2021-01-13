import React from 'react'
import './App.css'
import Addtask from "./component/Addtask"
import ListTask from "./component/ListTask"
import Filter from './component/Filter'
function App() {
  return (
    <header>
    <div className="App">
      <h1>MY TODO-LIST</h1>
    <Filter/>
    <br/> 
    <Addtask/>
    <br/>
    <ListTask/>
    </div>
    </header>
  );
}

export default App;
