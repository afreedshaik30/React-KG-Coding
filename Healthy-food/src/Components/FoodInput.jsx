import React from 'react'
import styles from '../Styles/FoodInput.module.css'
const FoodInput = ({handleNewEntry}) => {
 
  // const handleInput = (event) => {
  //       console.log(event.target.value);
  // }

  return (
    <div className={styles.foodInput}>
        <input type="text" placeholder='Enter your order : ' 
        // onChange={handleInput}/>
         onKeyDown={handleNewEntry}/>
    </div>
  )
}

export default FoodInput