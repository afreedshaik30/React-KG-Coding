import React from 'react';
import styles from './AddTodo.module.css';
import { useState } from 'react';

const AddTodo = ({handleNewItem2}) => {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (e) =>{
     setTodoName(e.target.value);
     
  }
  const handleDateChange = (e) => {
     setDueDate(e.target.value);
  }

  const handleAddBtnClicked = () => { 
    todoName && dueDate
    ? (handleNewItem2(todoName, dueDate), setTodoName(''), setDueDate(''))
    : alert('Please fill in both fields.');
  }
  return (
    <div className={`container text-center ${styles.container}`}>
      <div className={`row ${styles.styleRow}`}>
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" onChange={handleNameChange} value={todoName}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
          <button type="button" className={`btn ${styles.styleBtn}`} 
          onClick={handleAddBtnClicked}>
            Add item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;

