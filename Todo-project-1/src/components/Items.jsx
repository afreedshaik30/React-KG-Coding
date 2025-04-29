import React from "react";
import TodoItem from "./TodoItem";
        
const Items = ({ todoItems, handleDeleteItem2 }) => {
  return (
    <>
      <div className="item-container">
        {
            todoItems.map((item) => (
                <TodoItem itemName={item.name} todoDate={item.dueDate} handleDeleteItem3 = {handleDeleteItem2}></TodoItem>
             ))
        }
      </div>
    </>
  );
};

export default Items;
