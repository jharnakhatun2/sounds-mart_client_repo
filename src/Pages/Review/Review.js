import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const reviews = [
  {
    id: 1,
    title: "Unparalleled Sound Quality and Comfort!",
    review:
    "I am blown away by the exceptional sound quality and comfort of these headphones. The bass is deep, the mids are clear, and the highs are crisp. Additionally, the ear cushions provide a snug fit, allowing for hours of listening without any discomfort. Highly recommended!",
    name: "Sarah T.",
  },
  {
    id: 2,
    title: "Sleek Design and Incredible Noise Cancellation!",
    review:
    "These headphones not only look sleek and stylish but also deliver an impressive noise-canceling experience. Whether I'm on a noisy train or in a bustling coffee shop, the outside world fades away, allowing me to enjoy my music without distractions. A must-have for any music lover!",
    name: "Mark W.",
  },
  {
    id: 3,
    title: "Unmatched Wireless Convenience and Battery Life!",
    review:
    "I can't praise these headphones enough for their wireless convenience and remarkable battery life. The Bluetooth connectivity is seamless, and the range is impressive. I can move around my house freely without any audio interruptions. Plus, the battery life is exceptional, lasting me through long listening sessions. Perfect for on-the-go use!",
    name: "Emily L.",
  },
  {
    id: 4,
    title: "Outstanding Build Quality and Durability!",
    review:
    "I have put these headphones through rigorous use, and they have proven to be incredibly durable. The build quality is outstanding, with sturdy materials that can withstand daily wear and tear. Whether I'm traveling or working out, I can trust these headphones to keep up with me. A reliable companion for any adventure!",
    name: "David M.",
  }
];
export const Review = () => {
  return (
    <div className="py-8 lg:py-24 mx-auto md:px-6 bg-gray-100">
      <section className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <h2 className="text-dark text-3xl font-bold sm:text-4xl md:text-[40px]">
                Our Customer Review
              </h2>
              <p className="text-body-color text-base">
                Exceptional Service and Unforgettable Experience - A Customer's
                Delight!
              </p>
              <div className="divider mx-auto  h-1 w-1/12  bg-secondary"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1340px]  lg:me-0 lg:pe-0 lg:ps-8">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don't just take our word for it...
                <br className="hidden sm:block lg:hidden" />
                Read reviews from our customers
              </h2>

              <p className="mt-4 text-gray-500">
                The Customers were knowledgeable, helpful, and made us feel
                valued. An absolute pleasure to do business with.
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                  <span className="sr-only">Previous Slide</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                  <span className="sr-only">Next Slide</span>
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <Swiper
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              autoPlay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {reviews?.map((review) => {
                return (
                  <SwiperSlide key={review.id}>
                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                      <div className="swiper-container !overflow-hidden">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <blockquote className="flex h-full flex-col justify-between bg-white p-12 -z-10">
                              <div>
                                <div className="flex gap-0.5 text-[#eba421] justify-center">
                                  <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>

                                  <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                </div>
                                <div className="mt-4">
                                  <p className="text-2xl font-bold text-primary">
                                    {review.title}
                                  </p>

                                  <p className="text-sm mt-4 leading-relaxed text-gray-500">
                                    "{review.review}"
                                  </p>
                                </div>
                              </div>

                              <footer className="mt-4 text-sm font-bold text-gray-500">
                                &mdash; {review.name}
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              <svg
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
