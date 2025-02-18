import React from 'react'

export const VideoHeadphone = () => {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Sing Along
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Inspired Design & Quality
              <br className="hidden md:block" />
              Sound {' '}
              <span className="inline-block text-primary">
              With Beats
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Love what you listen, listen to what you love. Music speaks when words don’t. Make it clear. Let music reach your heart.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/products"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-secondary hover:bg-primary focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3">Start Shopping</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  points="4,4 22,4 19,14 4,14 "
                />
                <circle
                  cx="4"
                  cy="22"
                  r="2"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                  stroke="none"
                  fill="currentColor"
                />
                <circle
                  cx="20"
                  cy="22"
                  r="2"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                  stroke="none"
                  fill="currentColor"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  points="1,1 4,4 4,14 2,18 23,18 "
                />
              </svg>
            </a>
            <a
              href="/products"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-secondary"
            >
              Get 15% discount
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <video autoPlay="{true}"
    loop
    muted src="/HeadPhoneBranding.mp4" controls className="object-cover w-full h-56 rounded shadow-lg sm:h-96"/>
        </div>
      </div>
    </div>
  )
}

