import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import Divider from "../../Component/Divider/Divider";
import Loading from "../../Shared/Loading/Loading";
import Product from "./Product";
import ProductModal from "./ProductModal";

const Products = () => {
  const { isLoading } = useContext(AuthContext);
  const products = useLoaderData();
  const [category, setCategory] = useState(null);
  console.log(products.product);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-10 py-20 product_image mx-auto">
      <div className="text-center my-4">
        <h1 className="text-3xl font-bold text-zinc-800">Our All Products</h1>
        <Divider></Divider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.product.map(singleProduct => <Product
            key={singleProduct.id}
            pro={singleProduct}
            setCategory={setCategory}
            ></Product>)}
      </div>
      {
        category && <ProductModal category={category}></ProductModal>
      }
      
    </div>
  );
};

export default Products;
