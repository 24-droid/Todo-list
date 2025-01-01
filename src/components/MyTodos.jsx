import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { removeTodo } from "../slices/todoSlices"; 

const MyTodos = () => {
    const todos=useSelector((state)=> state.todo);
    const dispatch=useDispatch();
    const handleRemoveTodo=(id)=>{
        dispatch(removeTodo(id));
    }
  return (
    <div>
    <h5>My Todos List</h5>
    {
        todos.map((item)=>(
          <div className="todo-item"key={item.id}>
          {item.name}
          <button onClick={()=>handleRemoveTodo(item.id)}>Remove</button>
          </div>  
        ))
    }
    </div>
  )
}

export default MyTodos