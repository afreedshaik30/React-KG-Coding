import React from 'react'
import styles from '../styles/BtnContainer.module.css';

import BtnEle from './BtnEle';

const BtnContainer = ({onBtnClick2}) => {
  let data = [
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "CLR",
    "AC",
    "=",
  ];

  return (
    <div className={styles.btnContainer}>
        <BtnEle childData ={data} onBtnClick3={onBtnClick2}/>
    </div>
  )
}

export default BtnContainer