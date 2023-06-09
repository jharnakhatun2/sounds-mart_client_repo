import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Component/Button/PrimaryButton";
import { useQuery } from "@tanstack/react-query";

export const TopProducts = () => {
  const { data: headphone = [] } = useQuery({
    queryKey: ["headphone"],
    queryFn: async () => {
      const res = await fetch(`https://sounds-mart-server-jharna203.vercel.app/headphone`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const topFourProducts = headphone.slice(0, 4);
  return (
    <div className="bg-blend-multiply bg-fixed" style={{backgroundImage: "url(" + "https://i.ibb.co/N1rpdCp/newsletter.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <div className="container py-20 lg:py-24 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section className="">
          <h2 className="text-left text-3xl text-white font-bold uppercase">
            Our Top Products
          </h2>
          <div className="divider mb-20 h-1 w-1/12  bg-primary"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 gap-10">
            {topFourProducts?.map((headphones) => {
              const { _id, imageUrl, productName, rating, price } = headphones;
              return (
                <div
                  key={_id}
                  class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="/">
                    <img
                      class="rounded-t-lg p-8"
                      src={imageUrl}
                      alt="product image"
                    />
                  </a>
                  <div class="px-5 py-5 bg-gray-100 rounded-b-lg">
                    <a href="/">
                      <h3 class="uppercase tracking-wide text-sm font-bold text-gray-700">
                        {productName}
                      </h3>
                    </a>
                    <div class="flex justify-between items-center mt-2.5 mb-5">
                      <div class="flex items-center">
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          class="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {rating}
                        </span>
                      </div>
                      <div class="flex justify-end">
                        <svg
                          class="h-6 w-6 text-secondary fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="pt-3 border-t border-gray-300 flex items-center justify-between">
                      <span class="text-2xl text-gray-900">
                        $<span className="font-bold">{price}</span>
                      </span>
                      <Link to="/products">
                        <PrimaryButton>Add to cart</PrimaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/*single Card Start*/}

            {/*single Card End*/}
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </div>
  );
};
