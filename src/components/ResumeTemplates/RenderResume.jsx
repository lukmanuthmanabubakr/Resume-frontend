import React from "react";
import TemplateOne from "./TemplateOne";

const RenderResume = ({
  templateId,
  resumeData,
  colorPalette,
  containerwidth,
}) => {
  switch (templateId) {
    case "01":
      return (
        <TemplateOne
          resumeData={resumeData}
          colorPalette={colorPalette}
          containerwidth={containerwidth}
        />
      );
    default:
      return (
        <TemplateOne
          resumeData={resumeData}
          colorPalette={colorPalette}
          containerwidth={containerwidth}
        />
      );
  }
};

export default RenderResume;
