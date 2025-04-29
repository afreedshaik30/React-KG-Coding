import React from 'react'
import Item from './Item.jsx'

const FoodItems = ({data}) => {
  return (
    <ul className="list-group">
        <Item items={data}/>
    </ul>
  )
}

export default FoodItems;