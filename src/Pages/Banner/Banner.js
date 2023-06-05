import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Component/Button/PrimaryButton";


const Banner = () => {
  return (
    <div className="hero bannerbg w-full h-[636px] pt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2"></div>
        <div className="w-full md:w-8/12 lg:w-[50%] bg-[#03030357] p-5 shadow-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-secondary">Reusable Headphone for Next Generation Audio</h1>
          <p className="py-6 text-base-300">
          Enjoy absolute comfort and luxury. Sleek, lightweight aluminum, Scottish Muirhead leather, and matte dark satin ear-cup rings ensure that these EARPHONES feel as sumptuous as they sound
          </p>
          <Link to='/products'><PrimaryButton>Buy Now</PrimaryButton></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
