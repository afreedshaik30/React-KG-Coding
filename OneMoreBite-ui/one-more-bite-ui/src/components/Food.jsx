import { useState } from "react";
import { categories, data } from "../data/data.js";

const Food = () => {
  // console.log(data);

const foodItems = ["All", "Burger", "Pizza", "Salad", "Chicken"];
const prices = ['$', '$$', '$$$', '$$$$']

const [foods, setFoods] =  useState(data);

// Filter type - foodItems
const filterType = (category) =>{
    setFoods(
        data.filter((item) =>{
            return item.category === category.toLowerCase();
        })
    );
}

// Filter Type - prices
const filterByPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price
        })  
    );
};

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-center text-4xl">
        Our Menu Items
      </h1>

      {/* Filter Row  */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Types</p>
          <div className="flex justify-between flex-wrap ">
            {
                foodItems.map((item) => (<button key={item} onClick={() => item === "All" ? setFoods(data) : filterType(item)} className="m-1 border border-orange-600 text-black hover:bg-orange-600 hover:text-white">{item}</button>))
            }
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {
                prices.map((price) => <button key={price} onClick={() => filterByPrice(price)} className="m-1 border border-orange-600 text-black hover:bg-orange-600 hover:text-white">{price}</button>)
            }
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {
                foods.map((item) => (
                    <div key={item.id} className="border-0 shadow-lg rounded-lg hover:scale-105 duration-300">
                        <img src={item.image} alt={item.name}
                        className="w-full h-[200px] object-cover rounded"/>
                        <div className="flex justify-between p-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-400 text-white p-1 rounded-full">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default Food;
