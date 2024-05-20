import React from "react";
import stick from '../assets/stick.png'
const Purchase = () => {
  return (
    <div className="w-[70vw] mt-10 flex flex-col md:flex-row justify-between gap-2 items-center">
      
      {/* Left Part */}
      <div className="md:w-[60%] w-full">
        <h1 className="text-gray-300 text-2xl text-center md:text-5xl font-outfit md:text-start font-medium">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="text-gray-300 text-base md:text-lg font-outfit text-center md:text-start  my-6">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button className="bg-gradient-to-r  from-purple-700  to-orange-600  cursor-pointer font-sora text-lg rounded-3xl text-white  py-4 px-6  tracking-wide inline-flex items-center  my-2">
          Purchase From Envato  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
        </button>
      </div>

<img src={stick} alt="stick"/>

    </div>
  );
};

export default Purchase;
