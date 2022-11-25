import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Component/Button/PrimaryButton';

const Product = ({pro,setCategory}) => {
    return (
        <div key={pro.id}>
              <div className="card card-compact w-96 m-7 p-2 bg-base-100 shadow-xl">
                <PhotoProvider>
                  <PhotoView src={pro.image}>
                    <figure>
                      <img
                        className="cursor-pointer w-full"
                        src={pro.image}
                        alt="headphone"
                      />
                    </figure>
                  </PhotoView>
                </PhotoProvider>

                <div className="card-body bg-primary">
                <label onClick={() => setCategory(pro)} htmlFor="productModal" className="card-title text-neutral">
                {pro.title}</label>
                  <div className="flex justify-between">
                    <h3>Location : <span className="text-accent text-lg font-bold">{pro.location}</span></h3>
                    <h2 className="">Year of Use : <span className="text-accent text-lg font-bold">{pro.years_of_use}</span></h2>
                  </div>
                  <div className="flex justify-between">
                    <h5>Original Price : <span className="text-cyan-600 text-lg font-bold">${pro.original_price}</span></h5>
                    <h5>Resale Price : <span className="text-red-600 text-lg font-bold">${pro.resale_price}</span></h5>
                  </div>
                  
                  <div className="card-actions justify-between items-center">
                  <h2 className="">Seller : <span className="text-accent text-lg font-bold">{pro.seller_name}</span></h2>
                    <Link to={`/products/:id`}>
                      <PrimaryButton>BOOK NOW</PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default Product;