import React from 'react'
import "./Section1.css"

const Section1 = () => {
  return (
  <section className="landing-page">
  <div className="xl:container mx-auto lg:pt-16 pt-10">
    <div className="text-gray-600 body-font">
      <div className="lg:mx-auto flex flex-row px-5 pb-24 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4">
          <div className="lg:w-full w-full mx-auto ">
            <img
              src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244"
              alt="hero-img"
              fetchpriority="high"
              className="my-custom-class flex m-auto"
              width={550}
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-1 mt-1 md:mt-0">
            <div className="landing-widget-container mx-auto lg:py-4 ">
                <h1 className="text-center text-white mb-5 xl:mb-2 sm:mt-10 text-6xl">Gauge Water Purifier{" "}</h1>
                <span className="letters text-6xl">Puts An End</span>
                <span className="text-white text-center rt_gradient mb-5 xl:mb-2 sm:mt-10 text-6xl">{" "}to RO service pain</span>
              
            </div>
            <p className="mb-12 px-4 md:px-16 lg:px-0 lg:mx-3 leading-relaxed text-center font-medium text-base md:text-lg lg:text-xl max-w-2xl customer-para-one">
              Fully automatic water purifier provides the highest water savings
              while ensuring a seamless service experience.
            </p>
            <div className="flex flex-col justify-center items-center mx-auto relative">
              <button className="inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-7 text-base font-semibold">
                Take a product Tour
              </button>
              <p className="text-center text-zinc-400">
                Experience Convenience Like Never Before With Our Smart Water
                Purifier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Section1