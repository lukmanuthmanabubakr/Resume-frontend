import React, { useEffect, useState } from "react";
import { getLightColorFromImage } from "../../utils/helper";

const ResumeSummaryCard = ({ imgUrl, title, lastUpdated, onSelect }) => {
  const [bgColor, setBgColor] = useState("#ffffff");
  useEffect(() => {
    if (!imgUrl) {
      getLightColorFromImage(imgUrl)
        .then((color) => {
          setBgColor(color);
        })
        .catch(() => {
          setBgColor("#ffffff");
        });
    }
  }, [imgUrl]);
  return (
    <div
      onClick={onSelect}
      className="group relative border border-gray-200 bg-white rounded-[8px] overflow-hidden shadow-sm 
                 hover:shadow-xl transition-all duration-300 cursor-pointer 
                 hover:scale-[1.02]"
      style={{
        aspectRatio: "1 / 1.414", // Keeps the A4 shape (width : height)
        maxHeight: "360px",
        backgroundColor: bgColor,
      }}
    >
      {/* A subtle paper edge effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 group-hover:to-[#f6f1ff]"></div>

      {/* Thumbnail / Placeholder */}
      <div className="h-[70%] bg-gray-100 flex items-center justify-center overflow-hidden">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt="Resume Thumbnail"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 transition-colors duration-300 group-hover:text-[#af71ff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 mb-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v2.25A2.25 2.25 0 0117.25 18.75H6.75A2.25 2.25 0 014.5 16.5v-9A2.25 2.25 0 016.75 5.25h5.379a1.5 1.5 0 011.06.44l5.871 5.871a1.5 1.5 0 01.44 1.06z"
              />
            </svg>
            <p className="text-xs text-gray-400 group-hover:text-[#af71ff]">
              No Preview
            </p>
          </div>
        )}
      </div>

      {/* Info section */}
      <div className="h-[30%] flex flex-col justify-center px-4 py-3 bg-white transition-colors duration-300 group-hover:bg-[#faf6ff]">
        <h5 className="font-semibold text-gray-900 truncate mb-1 group-hover:text-[#af71ff]">
          {title}
        </h5>
        <p className="text-xs text-gray-500 group-hover:text-gray-600">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#af71ff]/0 group-hover:bg-[#af71ff]/5 transition-all duration-300 rounded-[8px]"></div>
    </div>
  );
};

export default ResumeSummaryCard;
