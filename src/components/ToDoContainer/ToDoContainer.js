import { useSelector,useDispatch } from "react-redux";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from '../ToDoList/ToDoList';
import { addTask, removeTask, isDoneTask } from "../actions";



const ToDoContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  
  const handleAddTask = (task) => dispatch(addTask(task))

  const handleremoveTask = (id) => dispatch(removeTask(id))

  const handleisDoneTask = (id) => dispatch(isDoneTask(id))

  return(
    <div className="App">
      <header>ADD TASK: {todos.length}</header>
      <ToDoForm addTask={handleAddTask} />
      <ToDoList todos={todos} removeTask={handleremoveTask} isDoneTask={handleisDoneTask}/>
    </div>
  )
}

export default ToDoContainer;