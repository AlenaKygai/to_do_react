import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  version: 1,
  todos:[],
};


const reducer = (state=initialState, action) => {
  switch(action.type){
    case ACTION_TYPES.ADD_TASK:
      return{
        ...state,
        todos:[...state.todos, action.payload],
      };
    case ACTION_TYPES.REMOVE_TASK:
        return{
        ...state,
        todos: action.payload,
      };
    case ACTION_TYPES.CHANGE_STATUS_TASK:
        return{
        ...state,
        todos: action.payload,
      };    
    default:
      return state;
  }
}
export default reducer;