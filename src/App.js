import { useState } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";


function App() {

  const [todos,setTodos] = useState([]);

  const addTask = (task) =>{
    const newTask = {
      id: new Date().getTime(),
      task,
      isDone: false,
    }
    setTodos([...todos,newTask]);
  }

  const removeTask = (id) => {
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const isDoneTask = (id) => {
    const newTodos = todos.map((todo) => {
        if(todo.id===id){
          return  ({
            ...todo,
            isDone:!todo.isDone
          })
        }
        return todo;
      }) 
    setTodos(newTodos);
  }

  return(
    <div className="App">
      <header>ADD TASK: {todos.length}</header>
      <ToDoForm addTask={addTask} />
      <ToDoList todos={todos} removeTask={removeTask} isDoneTask={isDoneTask}/>
    </div>
  )
}

export default App;
