import React from "react";

export default function Card({ imageSrc, title, description, buttonText, onButtonClick }) {
  return (
    <div className="relative flex flex-col rounded-xl bg-white/30 backdrop-blur-md text-white shadow-lg transform transition-all 
    duration-300 group lg:hover:-translate-x-10 border border-gray-400 hover:shadow-lg hover:shadow-[#4682B4] w-full sm:w-3/4 md:w-80 max-w-xs mx-auto mb-6">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={imageSrc}
          alt="Card Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-lg md:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-sm md:text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          type="button"
          className="select-none rounded-lg bg-[#4682B4] hover:bg-[#3B6E98] py-2 px-4 md:py-3 md:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}