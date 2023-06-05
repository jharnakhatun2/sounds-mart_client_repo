import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link} from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";


const Category = () => {
  

  const {data: products, isLoading} = useQuery({
  queryKey: ['products'],
  queryFn: async () =>{
      const res = await fetch(`https://sounds-mart-server-jharna203.vercel.app/products/`);
      const data = await res.json();
      return data;
  }
});


if(isLoading){
  return <Loading></Loading>
}

  return (
    <div className="category-bg">
    <div className="container mx-auto md:px-6 z-100">
      <section className="text-center py-20 lg:py-24 ">
    <h3 className="text-left text-3xl font-bold uppercase">Shop By Category</h3>
    <div className="divider mb-20 h-1 w-1/12  bg-secondary"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
      {
        products.map(product =><div className="border-double border-4 p-2 hover:shadow-2xl" key={product._id}>
            <Link className="link link-hover" to={`/products/${product._id}`}>
              <img
          className="mask mask-diamond mx-auto"
          src={product.image}
          alt="category"
        /></Link>
        <Link  className="link link-hover hover:text-secondary" to={`/products/${product._id}`}><h2 className="text-xl font-semibold text-natural">{product.name}</h2></Link>
        </div>)
      }
        
      </div>
    </section>
    </div>
    </div>
  );
};

export default Category;
