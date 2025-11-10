import React, { useEffect, useRef, useState } from "react";
import {
  DUMMY_RESUME_DATA,
  resumeTemplates,
  themeColorPalette,
} from "../../utils/data";
import { LuCircleCheckBig } from "react-icons/lu";
import Tabs from "../../components/Tabs";
import TemplateCard from "../../components/Cards/TemplateCard";

const TAB_DATA = [{ label: "Templates" }, { label: "Color Palettes" }];

const ThemeSelector = ({
  selectedTheme,
  setSelectedTheme,
  resumeData,
  onClose,
}) => {
  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);

  const [tabValue, setTabValue] = useState("Templates");

  const [selectedColorPalette, setSelectedColorPalette] = useState({
    colors: selectedTheme?.colorPalette || null,
    index: selectedTheme?.colorPaletteIndex ?? -1,
  });

  const [selectedTemplates, setSelectedTemplates] = useState({
    theme: selectedTheme?.theme || "",
    index: selectedTheme?.templateIndex ?? -1,
  });

  // ✅ handle done
  const handleThemeSelection = () => {
    setSelectedTheme({
      colorPalette: selectedColorPalette.colors,
      theme: selectedTemplates.theme,
    });
    onClose();
  };

  const updateBaseWidth = () => {
    if (resumeRef.current) {
      setBaseWidth(resumeRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateBaseWidth();
    window.addEventListener("resize", updateBaseWidth);

    return () => {
      window.removeEventListener("resize", updateBaseWidth);
    };
  }, []);

  return (
    <div className="container mx-auto gap-2 md:px-4">
      <div className="flex items-center justify-between mb-5 mt-2">
        <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />

        <button
          className="flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-md"
          onClick={handleThemeSelection}
        >
          <LuCircleCheckBig className="text-[15px]" />
          Done
        </button>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* LEFT SIDE */}
        <div className="col-span-12 md:col-span-5 bg-white p-2 rounded-md shadow-sm">
          <div className="grid grid-cols-2 gap-5 max-h-[60vh] overflow-y-scroll custom-scrollbar">
            {tabValue === "Templates" &&
              resumeTemplates.map((template, index) => (
                <TemplateCard
                  key={`templates_${index}`}
                  thumbnailImg={template.thumbnailImg}
                  isSelected={selectedTemplates.index === index}
                  onSelect={() => {
                    setSelectedTemplates({ theme: template.id, index });
                  }}
                />
              ))}
          </div>
        </div>

        {/* RIGHT SIDE (PREVIEW) */}
        <div
          className="col-span-12 md:col-span-7 bg-white p-3 rounded-md shadow-sm -mt-2"
          ref={resumeRef}
        >
          {/* TODO: Render resume preview here */}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
