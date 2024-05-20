import React from "react";
import g2 from "../assets/g2.png";
import leaf from '../assets/leaf.png'
import w from '../assets/w.png'
import stars from "../assets/stars.png";
import mA from '../assets/mA.png'
import "../App.css";
const Motion = () => {
  return (
    <div className="flex justify-center items-center w-full mt-8">
      <div className="w-[70vw]">
        {/* Top Part */}
        <div className="flex items-center justify-between">
          {/* <p className="text-white font-outfit text-3xl">
            MotionArt <span className="font-sora">Effect</span>
          </p> */}
          <img src={mA} alt="mA" className="cursor-pointer"/>
          <button className="hidden md:block bg-white font-sora hover:bg-transparent text-black hover:text-white border border-white duration-300 ease-in  p-4 rounded">
            Purchase Now
          </button>
        </div>

        {/* Middle Part */}
        <div className="flex relative items-center justify-center mt-28">
          <div className=" md:w-[9vw] absolute md:-left-0 md:-top-0 w-full -top-20 text-center ">
            <p className="leftGrad">Transform your website</p>
            <p className="text-lg font-outfit mt-2  text-gray-300">
              With Motion Art Effect
            </p>
          </div>
          <div className="text-center md:text-start">
            <h1 className="md:text-7xl text-4xl  font-outfit capitalize text-gray-300 sm:w-full md:w-[30vw]">
              Attract Your visitors attention with colorful
            </h1>
            <h1 className="gradText">Motion Art Effect</h1>
            <p className="text-gray-300 text-lg font-outfit md:w-[30vw] xs:w-full sm:text-base">
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </p>
          </div>
        </div>

        <h2 className="text-gray-300 text-2xl text-center mt-24 font-outfit">
          Trusted by thousands of users around the world
        </h2>

        {/* Bottom Part */}
        <div className=" xs:flex flex-col flex md:flex-row items-center justify-between mt-20">
        <div className="flex gap-4  my-4">
            <img src={leaf} alt="leaf" />
            <div>
              <img src={stars} alt="stars" className="my-5" />
              <p className="text-gray-300 text-base font-outfit font-semibold">
                4.5 Score, 9 Reviews
              </p>
            </div>
          </div>


          <div className="flex gap-4">
            <img src={g2} alt="g2" />
            <div>
              <img src={stars} alt="stars" className="my-5" />
              <p className="text-gray-300 text-base font-outfit font-semibold">
                4.5 Score, 9 Reviews
              </p>
            </div>
          </div>

         

          <div className="flex gap-4  my-4">
            <img src={w} alt="w" />
            <div>
              <img src={stars} alt="stars" className="my-5" />
              <p className="text-gray-300 text-base font-outfit font-semibold">
                4.5 Score, 9 Reviews
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Motion;
