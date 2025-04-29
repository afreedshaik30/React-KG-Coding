import React from "react";
import styles from '../Styles/ItemEach.module.css'

const ItemEach = ({foodItem, bought, handleBuyBtn}) => {
  // 24.Event Handling
  // const handleBuyBtn = (event) =>{
  //   console.log("Event : ", event);
  //   console.log(`${foodItem} is ordered`);
  // }

  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought ? "active" : ""}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button type="button" className={`${styles.button} btn btn-dark`} 
         /* onClick={(event) => handleBuyBtn(event)}>BUY</button> */
         onClick={handleBuyBtn}>BUY</button>
    </li>
  );
};

export default ItemEach;
