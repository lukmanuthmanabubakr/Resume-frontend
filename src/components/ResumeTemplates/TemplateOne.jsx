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
import ContactInfo from "../ResumeSections/ContactInfo";
import EducationInfo from "../ResumeSections/EducationInfo";
import { formatYearMonth } from "../../utils/helper";
import LanguageSection from "../ResumeSections/LanguageSection";
import WorkExperience from "../ResumeSections/WorkExperience";
import ProjectInfo from "../ResumeSections/ProjectInfo";
import SkillSection from "../ResumeSections/SkillSection";
import CertificationInfo from "../ResumeSections/CertificationInfo";

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
        transform: containerWidth > 0 ? `scale(${scale})` : "none",
        transformOrigin: "top left",
        width: containerWidth > 0 ? `${baseWidth}px` : "auto", //keep the original size so scalling works correctly
        height: "auto",
      }}
    >
      <div className="grid grid-cols-12 gap-2">
        <div
          className="col-span-4 py-10"
          style={{ backgroundColor: themeColors[0] }}
        >
          <div className="flex flex-col items-center px-2">
            <div className="relative w-[100px] h-[100px] rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center shadow-sm overflow-hidden">
              {resumeData.profileInfo.profilePreviewUrl ? (
                <img
                  src={resumeData.profileInfo.profilePreviewUrl}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div
                  className="flex items-center justify-center w-full h-full text-4xl"
                  style={{ color: themeColors[4] }}
                >
                  <LuUser />
                </div>
              )}
            </div>

            <h2 className="text-xl font-bold mt-3">
              {resumeData.profileInfo.fullName}
            </h2>
            <p className="text-sm text-center">
              {resumeData.profileInfo.designation}
            </p>
          </div>

          <div className="my-6 mx-6">
            <div className="flex flex-col gap-4">
              <ContactInfo
                icon={<LuMapPinHouse />}
                iconBg={themeColors[2]}
                value={resumeData.contactInfo.location}
              />
              <ContactInfo
                icon={<LuMail />}
                iconBg={themeColors[2]}
                value={resumeData.contactInfo.email}
              />
              <ContactInfo
                icon={<LuPhone />}
                iconBg={themeColors[2]}
                value={resumeData.contactInfo.phone}
              />
              {resumeData.contactInfo.linkedin && (
                <ContactInfo
                  icon={<RiLinkedinLine />}
                  iconBg={themeColors[2]}
                  value={resumeData.contactInfo.linkedin}
                />
              )}
              {resumeData.contactInfo.github && (
                <ContactInfo
                  icon={<LuGithub />}
                  iconBg={themeColors[2]}
                  value={resumeData.contactInfo.github}
                />
              )}
              <ContactInfo
                icon={<LuRss />}
                iconBg={themeColors[2]}
                value={resumeData.contactInfo.website}
              />
            </div>

            <div className="mt-5">
              <Title text="Education" color={themeColors[1]} />
              {resumeData.education.map((data, index) => (
                <EducationInfo
                  key={`education_${index}`}
                  degree={data.degree}
                  institution={data.institution}
                  duration={`${formatYearMonth(
                    data.startDate
                  )} - ${formatYearMonth(data.endDate)}`}
                />
              ))}
            </div>

            <div className="mt-5">
              <Title text="Languages" color={themeColors[1]} />
              <LanguageSection
                languages={resumeData.languages}
                accentColor={themeColors[3]}
                bgColor={themeColors[2]}
              />
            </div>
          </div>
        </div>
        <div className="col-span-8 pt-10 mr-10 pb-5">
          <Title text="Professional Summary" color={themeColors[1]} />
          <p className="text-sm font-medium">
            {resumeData.profileInfo.summary}
          </p>

          <div className="mt-6">
            <Title text="Work Experience" color={themeColors[1]} />
            {resumeData.workExperience.map((data, index) => (
              <WorkExperience
                key={`work_${index}`}
                company={data.company}
                role={data.role}
                duration={`${formatYearMonth(
                  data.startDate
                )} - ${formatYearMonth(data.endDate)}`}
                durationColor={themeColors[4]}
                description={data.description}
              />
            ))}
          </div>

          <div className="mt-6">
            <Title text="Projects" color={themeColors[1]} />
            {resumeData.projects.map((project, index) => (
              <ProjectInfo
                key={`project_${index}`}
                title={project.title}
                description={project.description}
                githubLink={project.github}
                liveDemoUrl={project.liveDemo}
                bgColor={themeColors[2]}
              />
            ))}
          </div>

          <div className="mt-6">
            <Title text="Skills" color={themeColors[1]} />
            <SkillSection
              skills={resumeData.skills}
              accentColor={themeColors[3]}
              bgColor={themeColors[2]}
            />
          </div>

          <div className="mt-6">
            <Title text="Certifications" color={themeColors[1]} />

            <div className="grid grid-cols-2 gap-2">
              {resumeData.certifications.map((data, index) => (
                <CertificationInfo
                  key={`cert_${index}`}
                  title={data.title}
                  issuer={data.issuer}
                  year={data.year}
                  bgColor={themeColors[2]}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Title text="Interests" color={themeColors[1]} />

            {Array.isArray(resumeData.interests) &&
              resumeData.interests.length > 0 &&
              resumeData.interests.some((item) => item.trim() !== "") && (
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {resumeData.interests.map((interest, index) => {
                    const trimmed = interest?.trim();
                    if (!trimmed) return null;

                    return (
                      <span
                        key={`interest_${index}`}
                        className="text-[11px] font-medium text-gray-800 px-3 py-1 rounded-lg shadow-sm"
                        style={{ backgroundColor: themeColors[2] }}
                      >
                        {trimmed}
                      </span>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
