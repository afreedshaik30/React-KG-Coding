import React from 'react'
import styles from './Msg.module.css';
const Msg = ({todoItems}) => {
  return <>
    { todoItems.length === 0 && <h1 className={styles.msg}>Enjoy your you don't have any To-do's</h1>}
  </>
}

export default Msg