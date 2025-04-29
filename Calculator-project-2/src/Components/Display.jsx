import React from "react";
import styles from '../styles/Display.module.css';

const Display = ({displayValue}) => {
  return (
    <input className={styles.display} type="text" placeholder="enter num :" value={displayValue} readOnly/>
  );
};

export default Display;
