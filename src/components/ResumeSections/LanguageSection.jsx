import React from "react";
import Progress from "../Progress";

const LanguageInfo = ({ language, progress, accentColor, bgColor }) => {
  return (
    <div className="flex items-center justify-between">
      <p className={"text-[12px] font-semibold text-gray-900"}>{language}</p>
      {progress > 0 && (
        <Progress
          progress={(progress / 100) * 5}
          color={accentColor}
          bgColor={bgColor}
        />
      )}
    </div>
  );
};

const LanguageSection = ({ languages, accentColor, bgColor }) => {
  return <div className="">languages</div>;
};

export default LanguageSection;
