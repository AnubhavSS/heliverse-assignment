import React from "react";
import '../App.css'
import browser from '../assets/browser.png'
const SupportSection = () => {
  return (
    <div className="supportGrad">
      <h1 className="font-outfit text-center font-semibold text-gray-200 text-xl md:text-3xl mt-10">
        Supported by All Popular Browsers
      </h1>
      <p className="text-gray-300 text-lg font-outfit mt-2 w-full md:w-[35%] text-center">
        Rest assured, Motion Art is designed to be compatible with all major web
        browsers
      </p>
      
      <img src={browser} alt="browsers" className="my-6"/>

     
    </div>
  );
};

export default SupportSection;
