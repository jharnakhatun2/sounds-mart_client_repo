import React from "react";
import PrimaryButton from "../../Component/Button/PrimaryButton";

const Advertise = () => {
  return (
    <div className="bg-base-200 p-20">
    <h3 className="text-3xl font-semibold mb-7">Our Latest Products :</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {/* Advertise product */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
          <PrimaryButton>Buy Now</PrimaryButton>
          </div>
        </div>
      </div>
      {/* Advertise product */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
          <PrimaryButton>Buy Now</PrimaryButton>
          </div>
        </div>
      </div>
      {/* Advertise product */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
          <PrimaryButton>Buy Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Advertise;
