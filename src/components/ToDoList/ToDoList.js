import React from "react";
import classnames from "classnames";

const ToDoList = ({todos, removeTask, isDoneTask}) => {

  if(!todos || !todos.length){
    return <p> NO TASK</p>
  }

  return (
    todos.map((todo)=>(
      <article key={todo.id} className="item-todo">
        <div
          onClick={()=>isDoneTask(todo.id)}
          className={classnames('item-text',{'strike':todo.isDone})}
        >{todo.task}</div>
        <div onClick={()=>removeTask(todo.id)} className="item-delete">X</div>
      </article>
    ))
  )
}

export default ToDoList;
