import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import PrimaryButton from "../../Component/Button/PrimaryButton";

const Advertise = () => {
  const { data: advproducts, isLoading } = useQuery({
    queryKey: ["advproducts"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://sounds-mart-server-jharna203.vercel.app/sellerproduct`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" bg-[#d1e9f08e] ">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-16">
        <h2 className="text-left text-3xl font-bold uppercase">
          NEW ARRIVALS{" "}
        </h2>
        <div className="divider mb-20 h-1 w-1/12  bg-secondary"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 gap-10">
          {advproducts.map((advProduct) => {
            const {
              _id,
              condition,
              image,
              location,
              price,
              product_name,
              use_year,
            } = advProduct;
            console.log(advProduct);
            return (
              <div key={_id}>
                {/* Single Card Start */}
                <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    class="max-w-full h-56 object-cover object-center"
                    src={image}
                    alt="avatar"
                  />
                  <div class="flex items-center px-6 py-3 bg-gray-900">
                    <svg
                      class="h-6 w-6 text-white fill-current"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                    </svg>
                    <Link to="/products">
                      <h1 class="mx-3 bg-gradient-to-r from-primary to-neutral text-black font-semibold text-sm uppercase">
                        Book Now
                      </h1>
                    </Link>
                  </div>
                  <div class="px-4">
                    <p class="text-sm uppercase font-semibold my-2">
                      {product_name}
                    </p>
                    <div class="flex space-x-2 text-gray-400 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p>{location}</p>
                    </div>
                    <div class="flex space-x-2 text-gray-400 text-sm my-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p>{use_year} Used</p>
                    </div>
                    <div class="border-t-2 "></div>

                    <div class="flex justify-between">
                      <div class="my-2">
                        <p class="font-semibold text-base mb-2">Vendor</p>
                        <div class="flex space-x-2">
                          <img
                            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            class="w-6 h-6 rounded-full"
                          />
                        </div>
                      </div>
                      <div class="my-2">
                        <p class="font-semibold bg-secondary rounded-full text-center text-base mb-2">
                          {condition}
                        </p>
                        <div class="text-2xl">
                          <p>
                            ${" "}
                            <span class="text-primary text-2xl font-bold">
                              {price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Card End */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advertise;
