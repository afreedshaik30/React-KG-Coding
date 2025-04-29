import AppName from "./Components/AppName.jsx";
import FoodInput from "./Components/FoodInput.jsx";
import ErrorMsg from "./Components/ErrorMsg";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  // let arr = []
  // let arr = ["apple", "banana", "mango"];

  // 26. useState hook
  // Arr = useState('Initial Value')
  // Arr[0] is Value, Arr[1] is Method()
// let [textState, setTextState] = useState("");

  let [foodItems, setFoodItems] = useState(["apple", "mango"]);

  const handleInput = (event) => {
    let formData = event.target.value;

    // textToShow = formData;
    // console.log("VALUE : ",textToShow);

    let updatedValue = setTextState(formData);
    // console.log("Updated Value : ", updatedValue); //undefined
    // console.log("Updated Value : ", formData); // updated value
  };

  const handleNewEntry = (e) => {

    if(e.key === 'Enter'){
      let newFoodItem = e.target.value;
      console.log('newFoodItem : ', newFoodItem);
      
      let newEntry = [...foodItems, newFoodItem] // spread
      setFoodItems(newEntry)
    }
  }

  return (
    <>
      <Container>
        <h1 align="center">Welcome to Food Order Portal</h1>
      </Container>

      <Container>
        <AppName />
        {/* <FoodInput handleInput={(e) => handleInput(e)} /> */}
        <FoodInput handleNewEntry={handleNewEntry}/>
        {/* <p>{textToShow}</p> */}
        {/* <p>{textState}</p> */}
        <ErrorMsg data={foodItems} />
        <FoodItems data={foodItems} />
      </Container>
    </>
  );
}

export default App;
