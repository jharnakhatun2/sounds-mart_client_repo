import React from "react";
import PrimaryButton from "../../Component/Button/PrimaryButton";


const Newsletter = () => {
  return (
    <div className="hero newsletter-bg w-full">
      <section class="my-32 text-center lg:text-left">
    <div class="flex flex-wrap justify-center">
      <div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
        <div class="grid items-center gap-x-6 lg:grid-cols-2 bg-slate-100 p-10">
          <div class="">
            <h2 class="text-3xl font-bold dark:text-white">
              Do not miss any updates.
              <br />
              <span class="text-primary dark:text-primary-400">Subscribe to the newsletter</span>
            </h2>
          </div>

          <div class="mb-6 flex-row md:mb-0 md:flex">
            <div class="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96" data-te-input-wrapper-init>
              <input type="text"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2" placeholder="Enter your email" />
              <label for="exampleFormControlInput2"
                class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Enter
                your email
              </label>
            </div>
            <PrimaryButton type="submit">SUBSCRIBE</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Newsletter;
