import React, { useState } from "react";
import ItemEach from "./ItemEach";

const Item = ({ items }) => {

  let [activeItems, setActiveItems] = useState([]);

  const fun1 = (item, event) => {
    console.log(`${item} is ordered`);
    // console.log("event :", event);

    let newItems = [...activeItems,item];
    setActiveItems(newItems);
  };

  return (
    <>
      {
        items.map((item) => (
          <ItemEach
            key={item}
            foodItem={item}
            bought ={activeItems.includes(item)}
            handleBuyBtn={(e) => fun1(item,e)}
          />
        ))
        // 25. passinf func via props (Emit Event from child to parent)
      }
    </>
  );
};

export default Item;
