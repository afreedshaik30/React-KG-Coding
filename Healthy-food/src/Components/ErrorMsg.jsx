import React from 'react'

const ErrorMsg = ({data}) => {
  return (
  <>
    {
       data.length === 0 && <h3> FoodItem is NOT Avaliable</h3>
    }
  </>
  )}

export default ErrorMsg