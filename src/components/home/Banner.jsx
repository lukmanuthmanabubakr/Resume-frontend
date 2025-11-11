import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-4 md:px-14 py-2 font-medium text-sm text-green-800 text-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF]">
      <p>✨ Build your professional resume faster with AI</p>
      <Link
        to='/'
        className="flex items-center gap-1 px-3 py-1 rounded-lg text-white bg-green-600 hover:bg-green-700 transition active:scale-95 ml-3"
      >
        Explore now
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.91797 7H11.0846"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 2.9165L11.0833 6.99984L7 11.0832"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Banner;
