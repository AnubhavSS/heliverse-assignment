import React from "react";
import '../App.css'
import light from '../assets/light.png'
import thumb from '../assets/thumb.png'
import moon from '../assets/moon.png'
const BottomSection = () => {
  return (
    <div className="md:w-[70vw] w-[90vw] my-10 flex flex-col  justify-center gap-2 items-center">
      
      {/* Text Part */}
      <div className="md:w-[50%] w-full">
        <h1 className="text-gray-300 text-center text-2xl  md:text-5xl font-outfit font-medium">
          An All-Round Plugin With Powerful Features
        </h1>
        <p className="text-gray-300 text-lg text-center font-outfit  my-6">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>

   <div className="flex flex-col md:flex-row justify-evenly gap-6">
    <div className="featureGrad">
        <img src={light} alt="light"/>
    <h1 className="font-outfit font-semibold text-gray-200 text-3xl m-5">
    Light Weight
        </h1>
        <p className="text-gray-300 text-lg font-outfit  mx-5 my-2">
        Motion Art for Elementor is designed to be lightweight.
        </p>
    </div>

    <div className="featureGrad">
        <img src={thumb} alt="thumb"/>
    <h1 className="font-outfit font-semibold text-gray-200 text-3xl m-5">
    100% Responsive
        </h1>
        <p className="text-gray-300 text-lg font-outfit  mx-5 my-2">
        Create a consistent visual experience across all devices.
        </p>
    </div>

    <div className="featureGrad">
        <img src={moon} alt="moon"/>
    <h1 className="font-outfit font-semibold text-gray-200 text-3xl m-5">
    User Friendly Interface
        </h1>
        <p className="text-gray-300 text-lg font-outfit  mx-5 my-2">
        Ensure a smooth experience for both applicants and administrators.
        </p>
    </div>
   </div>

    </div>
  );
};

export default BottomSection;
