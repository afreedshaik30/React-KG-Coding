import React from 'react'

const Random = () => {
  const getRandomNum = (min,max) => {
    return Math.floor(Math.random() * (max-min +1)) + min;
  }
  return (
    <h2 style={{backgroundColor:'purple',color: 'whitesmoke'}}>Random Num : {getRandomNum(1,100)}</h2>
  )
}

export default Random