import React from "react";
import PrimaryButton from "../../Component/Button/PrimaryButton";

const Newsletter = () => {
  return (
    <div className="hero newsletter-bg w-full h-[550px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2 bg-white text-center p-10 rounded">
          <h1 className="text-5xl text-nature font-sans font-bold">Newsletter</h1>
          <p className="py-6 text-accent text-xl">
            Want to discover our latest news? Subscribe to our newsletter and be the first to discover all news from Sounds Mart
          </p>
          <form>
          <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs mr-2" />
          <PrimaryButton type="submit">SUBMIT</PrimaryButton>
          </form>
          
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Newsletter;
