import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const ProductModal = ({ category }) => {
  const {
    title,
    image,
    des,
    location,
    original_price,
    resale_price,
    seller_name,
    short_dis,
    years_of_use,
  } = category;

  return (
    <div>
      <input type="checkbox" id="productModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="productModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={image} alt="modalImage" />
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex justify-between mt-3">
            <p>
              Original Price :
              <span className="text-sky-600 text-xl font-bold">
                ${original_price}
              </span>
            </p>
            <p>
              Resale Price :
              <span className="text-red-600 text-xl font-bold">
                ${resale_price}
              </span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              Location : <span className="text-nature text-lg">
                {location}
              </span>
            </p>
            <p>
              Year of youse : <span className="text-nature text-lg">
                {years_of_use}
              </span>{" "}
            </p>
          </div>

          <p className="py-4">
            <strong>Seller Name : </strong>
            {seller_name}
          </p>
          <p className="py-4">
            <strong>About :</strong>
            <br />
            {short_dis}
          </p>
          <p className="py-4">
            <strong>Description : </strong>
            <br />
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
