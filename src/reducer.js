const initialState = {
  version: 1,
  todos:[],
};


const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_TASK':
      return{
        ...state,
        todos:[...state.todos, action.payload],
      };
    case 'REMOVE_TASK':
        return{
        ...state,
        todos: action.payload,
      };
    case 'CHANGE_STATUS_TASK':
        return{
        ...state,
        todos: action.payload,
      };    
    default:
      return state;
  }
}
export default reducer;