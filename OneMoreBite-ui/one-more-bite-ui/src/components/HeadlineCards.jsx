import React from "react";

const HeadlineCards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Juicy Gourmet Burger",
      subtitle: "Freshly grilled & delicious",
      img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Crispy French Fries",
      subtitle: "Perfect for snacking",
      img: "https://plus.unsplash.com/premium_photo-1683121324545-196a903297f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Spicy Chinese Noodles",
      subtitle: "Tossed with veggies & sauces",
      img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {cardsData.map((card) => (
        <div key={card.id} className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/60 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{card.title}</p>
            <p className="px-2 font-bold">{card.subtitle}</p>
            <button className="border-black bg-white text-black font-bold mx-6.5 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={card.img}
            alt={`card-${card.id}`}
          />
        </div>
      ))}
    </div>

    // <div className="max-w-[1000px] mx-auto p-4 py-12 grid  md: grid-cols-3 gap-6">
    //   {/* Card */}
    //   <div className="rounded-xl relative">
    //     {/* Overlay */}
    //     <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
    //       <p className="font-bold text-2xl px-2 pt-4">
    //         Lorem ipsum dolor sit amet
    //       </p>
    //       <p className="px-2">Lorem ipsum</p>
    //       <button className="border-white bg-white text-black mx-2 absolute bottom-4">
    //         Order Now
    //       </button>
    //     </div>
    //     <img
    //       className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
    //       src="https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       alt="burger-img1"
    //     />
    //   </div>

    //   <div className="rounded-xl relative">
    //     {/* Overlay */}
    //     <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
    //       <p className="font-bold text-2xl px-2 pt-4">
    //         Lorem ipsum dolor sit amet
    //       </p>
    //       <p className="px-2">Lorem ipsum</p>
    //       <button className="border-white bg-white text-black mx-2 absolute bottom-4">
    //         Order Now
    //       </button>
    //     </div>
    //     <img
    //       className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
    //       src="https://plus.unsplash.com/premium_photo-1683121324545-196a903297f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       alt="img2"
    //     />
    //   </div>

    //   <div className="rounded-xl relative">
    //     {/* Overlay */}
    //     <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
    //       <p className="font-bold text-2xl px-2 pt-4">
    //         Lorem ipsum dolor sit amet
    //       </p>
    //       <p className="px-2">Lorem ipsum</p>
    //       <button className="border-white bg-white text-black mx-2 absolute bottom-4">
    //         Order Now
    //       </button>
    //     </div>
    //     <img
    //       className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
    //       src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //       alt="img3"
    //     />
    //   </div>
    // </div>
  );
};

export default HeadlineCards;
