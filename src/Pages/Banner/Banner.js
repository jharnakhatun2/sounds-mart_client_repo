import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Component/Button/PrimaryButton";


const Banner = () => {
  return (
    <div className="hero bannerbg w-full h-[636px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <h1 className="text-5xl text-white font-bold">Reusable Headphone for Next Generation Audio</h1>
          <p className="py-6 text-base-300">
          Enjoy absolute comfort and luxury. Sleek, lightweight aluminum, Scottish Muirhead leather, and matte dark satin ear-cup rings ensure that these EARPHONES feel as sumptuous as they sound
          </p>
          <Link to='/login'></Link><PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
