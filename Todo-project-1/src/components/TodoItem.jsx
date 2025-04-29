import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ itemName, todoDate, handleDeleteItem3 }) => {
  //   let itemName  = "Buy Milk";
  //   let todoDate  = "12/12/2024";

  // console.log("itemName:", itemName);
  // console.log("todoDate:", todoDate);

  return (
    <div className={styles.container}>
      <div className={`row ${styles.styleRow}`}>
        <div className={`col-6 ${styles.col6}`}>{itemName}</div>
        <div className={`col-4 ${styles.col4}`}>{todoDate}</div>
        <div className={`col-2 ${styles.styleBtn}`}>
          <button
            type="button"
            className={`btn ${styles.btnDanger}`}
            onClick={() => handleDeleteItem3(itemName)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
