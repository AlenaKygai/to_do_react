import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
  const [useInputValue, setUserInputValue] = useState('');

  const handleChange = (e) =>{
    setUserInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    addTask(useInputValue)
    e.preventDefault();
    setUserInputValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Enter value"
      onChange={handleChange}
      value={useInputValue}
      />
      <button>Add</button>
    </form>
  )
}

export default ToDoForm;