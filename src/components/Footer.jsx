import React from "react";
import "../App.css";
const Footer = () => {
  return (
    <div className="footGrad">
      <p class="text-sm font-sora text-gray-300 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">
      © 2023 Copywrite. All rights reserved by QodeMatrix
      </p>
      <div className="text-sm font-sora text-gray-300 flex gap-4 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">
        <p className="cursor-pointer">Documentation</p>
        <p className="cursor-pointer">Support</p>
      </div>
    </div>
  );
};

export default Footer;
