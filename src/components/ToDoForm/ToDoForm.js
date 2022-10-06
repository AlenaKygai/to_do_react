import React, { useState } from "react";

const ToDoForm = ({addTask}) => {

  const [userInputValue, setUserInputValue] = useState('');
  
  const handleChange = (e) =>{
    setUserInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    addTask(userInputValue);
    e.preventDefault();
    setUserInputValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Enter value"
      onChange={handleChange}
      value={userInputValue}
      />
      <button>Add</button>
    </form>
  )
}

export default ToDoForm;


