import React from "react";

const CallToAction = () => {
  return (
    <div
      id="contact"
      className="max-w-5xl mx-2 md:mx-auto p-px rounded-2xl bg-gradient-to-r from-green-600/20 to-green-500/30 my-20 md:my-24"
    >
      <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-gradient-to-r from-green-50 to-green-100/50">
        <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent font-medium">
            ATS-Friendly Templates
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-medium mt-2 leading-[1.2]">
          Land Your Dream Job with <br />
          <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
            AI-Powered Resumes
          </span>
          That Stand Out!
        </h2>
        <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">
          Build professional, ATS-optimized resumes in minutes with AI
          assistance. Get noticed by recruiters and land more interviews.
        </p>
        <button
          type="button"
          className="bg-gradient-to-r from-green-700 to-green-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-green-600/25"
        >
          Create Your Resume Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
