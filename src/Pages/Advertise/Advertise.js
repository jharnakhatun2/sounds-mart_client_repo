import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Advertise = () => {
  const { data: advproducts, isLoading} = useQuery({
    queryKey: ["advproducts"],
    queryFn: async () => {
      try {
        const res = await fetch(`https://sounds-mart-server-jharna203.vercel.app/sellerproduct`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {}
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div className="bg-base-200 p-10">
    <div className="m-10">
      <h2 className="text-2xl font-semibold">Our Latest Products : </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {
      advproducts.map(advProduct =>{
        const {_id,condition,image,location,price,product_name,use_year} = advProduct;
        console.log(advProduct);
        return <div key={_id}>
              <div className="card card-compact w-96 m-7 p-2 bg-base-100 shadow-xl">
                <figure><img
                        className="cursor-pointer w-full"
                        src={image}
                        alt="headphone"/>
                </figure>
                  

                <div className="card-body bg-primary">
                  <h2 className="text-2xl">{product_name}</h2>
                  <div className="flex justify-between">
                    <h3>Location : <span className="text-accent text-lg font-bold">{location}</span></h3>
                    <h2 className="">Year of Use : <span className="text-accent text-lg font-bold">{use_year}</span></h2>
                  </div>
                  <div className="flex justify-between">
                    <h5>Price : <span className="text-red-600 text-lg font-bold">${price}</span></h5>
                    <h5>Condition : <span className="text-cyan-600 text-md font-bold">{condition}</span></h5>
                  </div>
                  
                  <div className="card-actions justify-between items-center">
                  <Link to="/dashboard"><button className="btn btn-primary w-full bg-gradient-to-r from-primary to-neutral text-white border-0">BOOK NOW</button></Link>
                  
                  </div>
                </div>
              </div>

            </div>
      })
    }
    
      </div>
    </div>
  </div>
  );
};

export default Advertise;
