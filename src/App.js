import React, { useState } from 'react'
import './App.css';
import Todoinput from './component/Todoinput';
import TodoList from './component/TodoList';
export default function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
    if(inputText!=='')
     setListTodo([...listTodo,inputText]);
  }
  const deleteListItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
     setListTodo([...newListTodo])
  }
  
  return (
    <>
    <div className="main-container">
      <div className="center-container">
<Todoinput addList={addList} />
<center><h1 className='app-heading'>Task pending</h1></center>
<hr/>
{listTodo.map((listItem,i)=>{
  return(<TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
  )
})}

      </div>
    </div>
    </>
  )
}

