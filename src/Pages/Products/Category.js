import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link} from "react-router-dom";
import Divider from "../../Component/Divider/Divider";
import Loading from "../../Shared/Loading/Loading";


const Category = () => {
  

  const {data: products, isLoading} = useQuery({
  queryKey: ['products'],
  queryFn: async () =>{
      const res = await fetch(`http://localhost:5000/products/`);
      const data = await res.json();
      return data;
  }
});


if(isLoading){
  return <Loading></Loading>
}

  return (
    <div className="text-center pt-20 category-bg w-full ">
    <h3 className="text-4xl font-semibold">Shop By Category</h3>
    <Divider></Divider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-20 ">
      {
        products.map(product =><div className="border-double border-4 p-2" key={product._id}>
            <Link className="link link-hover" to={`/products/${product._id}`}><img
          className="mask mask-diamond mx-auto"
          src={product.image}
          alt="category"
        /></Link>
        <Link  className="link link-hover hover:text-secondary" to={`/products/${product._id}`}><h2 className="text-xl font-semibold text-natural ">{product.name}</h2></Link>
        </div>)
      }
        
      </div>
    </div>
  );
};

export default Category;
