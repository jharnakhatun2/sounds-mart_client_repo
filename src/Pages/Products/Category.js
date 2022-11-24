import React from "react";
import { Link } from "react-router-dom";
import Divider from "../../Component/Divider/Divider";

const Data = [
    {
        "name" : "In Ear Earbud Headphones",
        "image" : "https://i.ibb.co/YpyW4wj/1.png" 
    },
    {
        "name" : "Over-Ear Headphones",
        "image" : "https://i.ibb.co/2yJ6zmL/2.png"
    },
    {
        "name" : "Bluetooth Headphones",
        "image" : "https://i.ibb.co/bXZhK6F/3.png"
    },
    {
        "name" : "Noise-cancelling Headphones",
        "image" : "https://i.ibb.co/Qnpx5h9/4.png"
    }
]

const Category = () => {
  return (
    <div className="text-center pt-20 category-bg w-full ">
    <h3 className="text-4xl font-semibold">Shop By Category</h3>
    <Divider></Divider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-20 ">
      {
        Data.map(category =><div className="border-double border-4 p-2" key={category._id}>
            <Link className="link link-hover" to="/category/:id"><img
          className="mask mask-diamond mx-auto"
          src={category.image}
          alt="category"
        /></Link>
        <Link  className="link link-hover hover:text-secondary" to="/category/:id"><h2 className="text-xl font-semibold text-natural ">{category.name}</h2></Link>
        </div>)
      }
        
      </div>
    </div>
  );
};

export default Category;
