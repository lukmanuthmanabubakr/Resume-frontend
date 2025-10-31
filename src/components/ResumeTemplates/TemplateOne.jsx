import React from "react";
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
      <span className="absolute bottom-0 left-0 w-full h-2" style={{ backgroundColor: color }}></span>
      <h2 className={"relative text-sm font-bold"}>{text}</h2>
    </div>
  );
};

const TemplateOne = ({ resumeData, colorPalette, containerwidth }) => {
  return <div>
    
  </div>;
};

export default TemplateOne;
