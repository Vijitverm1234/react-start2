import React from 'react'

export default function TodoList(props) {
  return (
    <div>
      <li className="list-item">
       {props.item} <span className="icons"><i class="fa-solid fa-delete-left icon-delete" 
       onClick={e=>{
        props.deleteItem(props.index)
       }}></i></span>
      </li>
    </div>
  )
}
