import React from 'react'
import styles from '../styles/BtnContainer.module.css';

const BtnEle = ({childData, onBtnClick3}) => {
  return (
    <>
    {
        childData.map((textOnButton) => (
                <button 
                  key={textOnButton} 
                  className={styles.btnEle} 
                  onClick={() => onBtnClick3(textOnButton)}
                > 
                  {textOnButton} 
                </button>
        ))
    }
    </>
  )
}

export default BtnEle