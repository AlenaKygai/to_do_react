import { useSelector,useDispatch } from "react-redux";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from '../ToDoList/ToDoList';


const ToDoContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

    const addTask = (task) => dispatch ({
      type: 'ADD_TASK',
      payload:{
      id: new Date().getTime(),
      task,
      isDone: false,
    }
  })

  const removeTask = (id) => {
    dispatch({
      type: 'REMOVE_TASK',
      payload:todos.filter(todo => todo.id!==id),
    })
  }

  const isDoneTask = (id) => {
    dispatch({
      type: 'CHANGE_STATUS_TASK',
      payload:todos.map((todo) => {
        if(todo.id===id){
          return  ({
            ...todo,
            isDone:!todo.isDone
          })
        }
        return todo;
      }) 
    })
  }

  return(
    <div className="App">
      <header>ADD TASK: {todos.length}</header>
      <ToDoForm addTask={addTask} />
      <ToDoList todos={todos} removeTask={removeTask} isDoneTask={isDoneTask}/>
    </div>
  )
}

export default ToDoContainer;