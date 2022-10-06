import ACTION_TYPES from "./actionTypes";


export const addTask = (task) => {
  return {
    type:ACTION_TYPES.ADD_TASK,
      payload:{
      id: new Date().getTime(),
      task,
      isDone: false,
    }}
}

export const removeTask = (id) => (dispatch, getState) => {
  const {todos} = getState();
  
    dispatch({
      type:ACTION_TYPES.REMOVE_TASK,
      payload: todos.filter(todo => todo.id!==id),
    })
  }

export  const isDoneTask = (id) => (dispatch, getState) => {
    const {todos} = getState();

    dispatch({
      type: ACTION_TYPES.CHANGE_STATUS_TASK,
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