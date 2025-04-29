import "./App.css";
import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import Items from "./components/Items";
import { useState } from "react";
import Msg from "./components/Msg";

function App() {

  // let itemsArr =[
  //   {
  //     name : "learn react",
  //     dueDate : "may-5"
  //   },
  //   {
  //     name : "hotel r-s project" ,
  //     dueDate : "may-20"
  //   },
  //   {
  //     name : "e-comm mern-stack project" ,
  //     dueDate : "may-30"
  //   }

  // ];

  const itemsArr = [];
  const [todoItems, setTodoItems] = useState(itemsArr);

  const handleNewItem1 = (itemName,itemDueDate) => {
      console.log(itemName,itemDueDate);

        const newTodoItems = [...todoItems,{ name : itemName, dueDate : itemDueDate},]
        if (itemName !== '' && itemDueDate !== '') {
          setTodoItems(newTodoItems);
        }
  }

  const handleDeleteItem1 = (itemName) => {
    let newtodoItem = todoItems.filter(item => item.name !== itemName); //If item.name != itemName filter items in new arr 
    setTodoItems(newtodoItem);
    console.log("deleted : ", itemName);
  }

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AppTodo handleNewItem2={handleNewItem1} />
        <Msg todoItems={todoItems}/>
        <Items todoItems={todoItems} handleDeleteItem2 ={handleDeleteItem1}/>
      </center>
    </>
  );
}

export default App;
