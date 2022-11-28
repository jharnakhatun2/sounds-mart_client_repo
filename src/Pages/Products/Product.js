import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const Product = ({pro,setCategory,setBookingModal}) => {
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
                  <h2><div className="badge badge-info badge-xs"></div> Seller : <span className="text-accent text-lg font-bold">{pro.seller_name}</span></h2>
                  <label onClick={() => setBookingModal(pro)} htmlFor="bookingModal" className="btn btn-primary bg-gradient-to-r from-primary to-neutral text-black border-0">BOOK NOW</label>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default Product;