import React from 'react'

export const BuyingGuide = () => {
  return (
    <div>
        <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-16">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16 mb-5 md:mb-5 lg:mb-0">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src="https://i.ibb.co/4KtywXG/benjamin-lehman-OK7-3-Ol-MCB4-unsplash.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100 shadow-lg py-5">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        {/* buying guide */}
        <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-8/12">
        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-2 font-bold">Sound Quality</p>
            <p className="text-neutral-500 dark:text-neutral-300">
            Immersive sound seek clear, balanced audio for a captivating experience.
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-2 font-bold">Price Consideration</p>
            <p className="text-neutral-500 dark:text-neutral-300">
            Value for money determine budget, prioritize features for a smart purchase.
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-2 font-bold">Wired or Wireless</p>
            <p className="text-neutral-500 dark:text-neutral-300">
            Wired or wireless consider audio quality, convenience, and freedom of movement.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="shrink-0">
            <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-2 font-bold">Noise Cancellation</p>
            <p className="text-neutral-500 dark:text-neutral-300">
            Peaceful listening opt for active noise cancellation to block out distractions.
            </p>
          </div>
        </div>
        </div>
    </div>
  </div>
  </div>
</section>
    </div>
  )
}


