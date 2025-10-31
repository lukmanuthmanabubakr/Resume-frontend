import React, { useEffect, useRef, useState } from "react";
import {
  LuMail,
  LuPhone,
  LuMapPinHouse,
  LuRss,
  LuGithub,
  LuUser,
} from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";

const DEFAULT_THEME = ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#008ED5", "#AA5565"];

const Title = ({ text, color }) => {
  return (
    <div className="relative w-fit mb-2.5">
      <span
        className="absolute bottom-0 left-0 w-full h-2"
        style={{ backgroundColor: color }}
      ></span>
      <h2 className={"relative text-sm font-bold"}>{text}</h2>
    </div>
  );
};

const TemplateOne = ({ resumeData, colorPalette, containerWidth }) => {
  const themeColors = colorPalette?.length > 0 ? colorPalette : DEFAULT_THEME;
  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800); //Default value
  const [scale, setScale] = useState(1);

  useEffect(() => {
    //Calculate the scale factor base on the container width
    const actualBaseWidth = resumeRef.current.offsetWidth;
    setBaseWidth(actualBaseWidth); //Get the actual base width
    setScale(containerWidth / baseWidth);
  }, [containerWidth]);
  return (
    <div
      ref={resumeRef}
      className="p-3 bg-white"
      style={{
        transform: containerWidth > 0 ? `scale{${scale}}` : "none",
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : "auto", //keep the original size so scalling works correctly
        height: "auto",
      }}
    >
      <div className="grid grid-cols-12 gap-8">
        <div
          className="col-span-8 py-10"
          style={{ backgroundColor: themeColors[0] }}
        >
          <div className="flex flex-col items-center px-2">
            <div
              className="w-[100px] h-[100px] max-w-[110px] max-h-[110px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: themeColors[1] }}
            >
              {resumeData.profileInfo.profilePreviewUrl ? (
                <img
                  src={resumeData.profileInfo.profilePreviewUrl}
                  className="w-[90px] h-[90px] rounded-full"
                />
              ) : (
                <div
                  className="w-[90px] h-[90px] flex items-center justify-center text-5xl rounded-full"
                  style={{ color: themeColors[4] }}
                >
                  <LuUser />
                </div>
              )}
            </div>
            <h2 className="text-xl font-bold mt-3">{resumeData.profileInfo.fullName}</h2>
            <p className="">{resumeData.profileInfo.designation}</p>
          </div>

          <div className=""></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default TemplateOne;
