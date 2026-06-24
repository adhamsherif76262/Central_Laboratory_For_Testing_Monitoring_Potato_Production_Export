import React from 'react'

export default function PrelineCarousel() {
  return (
    <section>
{/* Carousel */}
<div id="hs-carousel" className="relative" data-hs-carousel='{"loadingClasses": "opacity-0"}' >
  <div className="hs-carousel relative w-full min-h-96 overflow-hidden">
    {/* Carousel Body */}
    <div className="hs-carousel-body flex flex-nowrap absolute top-0 bottom-0 inset-s-0 transition-transform duration-700 opacity-0">
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-100 p-6">
          <span className="self-center text-4xl text-gray-800 transition duration-700">First slide</span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-200 p-6">
          <span className="self-center text-4xl text-gray-800 transition duration-700">Second slide</span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-300 p-6">
          <span className="self-center text-4xl text-gray-800 transition duration-700">Third slide</span>
        </div>
      </div>
    </div>
    {/* End Carousel Body */}
  </div>

  {/* Arrows */}
  <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 inset-s-2 inline-flex justify-center items-center size-10 bg-white text-gray-800 rounded-full shadow-2xs hover:bg-gray-50 -translate-y-1/2 focus:outline-hidden">
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </span>
    <span className="sr-only">Previous</span>
  </button>
  <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 inset-e-2 inline-flex justify-center items-center size-10 bg-white text-gray-800 rounded-full shadow-2xs hover:bg-gray-50 -translate-y-1/2 focus:outline-hidden">
    <span className="sr-only">Next</span>
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </span>
  </button>
  {/* End Arrows */}

  {/* Info Pagination */}
  <div className="hs-carousel-info inline-flex justify-center px-4 absolute bottom-3 inset-s-1/2 -translate-x-1/2 bg-white text-gray-800 rounded-lg">
    <span className="hs-carousel-info-current me-1">0</span>
    /
    <span className="hs-carousel-info-total ms-1">0</span>
  </div>
  {/* End Info Pagination */}
</div>
{/* End Carousel */}
    </section>
  )
}
