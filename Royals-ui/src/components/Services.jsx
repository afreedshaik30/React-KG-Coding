import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  GiFlowerTwirl,
  GiLipstick,
  GiMirrorMirror,
  GiSpray,
} from "react-icons/gi";
import { FaSpa, FaSmile } from "react-icons/fa";
import { MdFace, MdOutlineSelfImprovement } from "react-icons/md";
import { CgSpinnerTwo } from "react-icons/cg";

// Import local images
import LuxuryFacial from "../assets/LFT.jpg";
import HairStyling from "../assets/HSC.jpg";
import BodyMassage from "../assets/FBM.jpg";
import BridalMakeup from "../assets/BM.jpg";
import Manicure from "../assets/MP.jpg";
import LaserHairRemoval from "../assets/LHR.jpg";
import Microblading from "../assets/MB.jpg";
import BodyScrub from "../assets/BSW.jpg";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const services = [
    {
      id: 1,
      title: "Luxury Facial Therapy",
      price: "₹ 450",
      image: LuxuryFacial,
      tags: ["Skincare", "Relaxation"],
      description:
        "Premium facial treatment with organic products and hot stone therapy",
      icon: <MdFace className="w-8 h-8 text-black-600" />,
    },
    {
      id: 2,
      title: "Hair Styling & Coloring",
      price: "₹ 150",
      image: HairStyling,
      tags: ["Haircare", "Styling"],
      description:
        "Expert color matching and precision cutting with top-tier products",
      icon: <GiMirrorMirror className="w-8 h-8 text-black-600" />,
    },
    {
      id: 3,
      title: "Full Body Massage",
      price: "₹ 250",
      image: BodyMassage,
      tags: ["Spa", "Wellness"],
      description:
        "Aromatherapy massage combining Swedish and deep tissue techniques",
      icon: <FaSpa className="w-8 h-8 text-black-600" />,
    },
    {
      id: 4,
      title: "Bridal Makeup",
      price: "₹ 300",
      image: BridalMakeup,
      tags: ["Makeup", "Special Events"],
      description:
        "Professional bridal makeup with long-lasting, photo-friendly products",
      icon: <GiLipstick className="w-8 h-8 text-black-600" />,
    },
    {
      id: 5,
      title: "Manicure & Pedicure",
      price: "₹ 100",
      image: Manicure,
      tags: ["Nails", "Care"],
      description: "Luxurious nail treatment with paraffin wax and massage",
      icon: <GiFlowerTwirl className="w-8 h-8 text-black-600" />,
    },
    {
      id: 6,
      title: "Laser Hair Removal",
      price: "₹ 200",
      image: LaserHairRemoval,
      tags: ["Permanent", "Treatment"],
      description: "Advanced laser technology for smooth, hair-free skin",
      icon: <GiSpray className="w-8 h-8 text-black-600" />,
    },
    {
      id: 7,
      title: "Microblading",
      price: "₹ 400",
      image: Microblading,
      tags: ["Eyebrows", "Semi-Permanent"],
      description:
        "Natural-looking eyebrow enhancement with micro-pigmentation",
      icon: <MdOutlineSelfImprovement className="w-8 h-8 text-black-600" />,
    },
    {
      id: 8,
      title: "Body Scrub & Wrap",
      price: "₹ 400",
      image: BodyScrub,
      tags: ["Detox", "Bodycare"],
      description: "Exfoliating treatment with herbal wraps for glowing skin",
      icon: <FaSmile className="w-8 h-8 text-black-600" />,
    },
  ];

  const toggleServices = () => {
    setShowAll(!showAll);
    if (!showAll) {
      scroll.scrollMore(500, { smooth: true });
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-[#fceedd] to-[#f9eab8]"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl  mb-4 bg-gradient-to-r from-[#f7e7ce] to-[#ffe5b4] bg-clip-text">
            Our Beauty Salon
          </h2>
          <p className="text-amber-800 max-w-2xl mx-auto text-xl font-medium ">
            Indulge in our exclusive beauty treatments crafted for royalty
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {(showAll ? services : services.slice(0, 6)).map((services) => (
            <div
              key={services.id}
              className="group relative bg-[#fff9e6] rounded-2xl shadow-xl border-2 border-black-10 overflow-hidden transition-all duration-300 hover:border-amber-200 hover:shadow-2xl hover:translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute top-4 right-4 z-10 bg-white/30 backdrop-blur-sm p-2 rounded-full">
                  {services.icon}
                </div>
                <img
                  src={services.image}
                  alt={services.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  {/* Placeholder */}
                  <span className="bg-amber-300 text-black px-3 py-2 rounded-md text-sm font-md border shadow-lg float-right hover:bg-amber-500">
                    {services.price}
                  </span>
                </div>
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-3">
                  {services.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-amber-300 text-black px-3 py-1 rounded-full text-sm font-md border hover:bg-amber-500 hover:shadow-md transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-light mb-2 text-black-800">
                  {services.title}
                </h3>
                <p className="text-gray-700 font-sans leading-relaxed">
                  {services.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TOOGLE */}
        <div className="flex justify-center mt-12">
          <button
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-3 rounded-full
                hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-200 font-medium 
                flex items-center gap-2"
            onClick={toggleServices}
          >
            {showAll? "Show Less": "Explore More..."}
            <CgSpinnerTwo className="w-5 h-5 animate-spin"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
