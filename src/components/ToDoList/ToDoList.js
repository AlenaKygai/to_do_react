import React from "react";
import classnames from "classnames";

const ToDoList = ({todos,isDoneTask,removeTask}) => (
 
  todos.map((todo)=>(
    <article key={todo.id} className="item-todo">
      <div
        onClick={()=>isDoneTask(todo.id)}
        className={classnames('item-text',{'strike':todo.isDone})}
      >{todo.task}</div>
      <div onClick={()=>removeTask(todo.id)} className="item-delete">X</div>
    </article>
    )
  )
)

export default ToDoList;