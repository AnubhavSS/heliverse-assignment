import React from "react";
import section from "../assets/section.png";
import page from '../assets/page.png'
import '../App.css'
const ApplySection = () => {
  return (
    <div className="md:w-[70vw] w-full mt-10 flex flex-col  justify-center gap-2 items-center">
      <h1 className="text-gray-300 text-center w-[65%] text-2xl md:text-5xl font-outfit font-medium">
        Apply On Any Section Or Enable For Whole Page
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around mt-1">

      {/* Left  part */}
      <div className="sectionGrad">
        <h1 className="font-outfit font-semibold text-gray-200 text-xl md:text-3xl m-5">
          Apply On Section
        </h1>
        <p className="text-gray-300 md:text-lg text-base font-outfit  m-5">
          Apply on section is a game-changer, offering an unparalleled way to
          manage applications directly from your website.{" "}
        </p>
        <img src={section} alt="section" className="m-2 md:m-5 " />
      </div>

        {/* Right  part */}
        <div className="sectionGrad" style={{marginTop:"150px"}}>
        <h1 className="font-outfit font-semibold text-gray-200 text-xl md:text-3xl m-5">
        Apply On Page
        </h1>
        <p className="text-gray-300 text-base md:text-lg font-outfit  m-5">
        Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
        </p>
        <img src={page} alt="page" className="m-2 md:m-5" />
      </div>
      </div>

    </div>
  );
};

export default ApplySection;
