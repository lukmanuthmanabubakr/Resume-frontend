import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  LuArrowLeft,
  LuArrowRight,
  LuCircleAlert,
  LuDownload,
  LuPalette,
  LuSave,
  LuTrash2,
} from "react-icons/lu";
import toast from "react-hot-toast";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import TitleInput from "../../components/inputs/TitleInput";
import { useReactToPrint } from "react-to-print";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import StepProgress from "../../components/StepProgress";
import ProfileInfoForm from "./Forms/ProfileInfoForm";
import ContactInfoForm from "./Forms/ContactInfoForm";
import WorkExperienceForm from "./Forms/WorkExperienceForm";
import EducationDetailForm from "./Forms/EducationDetailForm";
import SkillsInfoForm from "./Forms/SkillsInfoForm";
import ProjectsDetailForm from "./Forms/ProjectsDetailForm";
import CertificationInfoForm from "./Forms/CertificationInfoForm";
import AdditionalInfoForm from "./Forms/AdditionalInfoForm";
const EditResume = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();

  const resumeRef = useRef(null);
  const resumeDownloadRef = useRef(null);

  const [baseWidth, setBaseWidth] = useState(800);
  const [openThemeSelector, setOpenThemeSelector] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  const [currentPage, setCurrentPage] = useState("profile-info");
  const [progress, setProgress] = useState(0);
  const [resumeData, setResumeData] = useState({
    title: "",
    thumbnailLink: "",
    profileInfo: {
      profileImg: null,
      profilePreviewUrl: "",
      fullName: "",
      designation: "",
      summary: "",
    },
    template: {
      theme: "",
      colorPalette: "",
    },
    contactInfo: {
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
    },
    workExperience: [
      {
        category: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [
      {
        name: "",
        progress: 0,
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        github: "",
        liveDemo: "",
      },
    ],
    certifications: [
      {
        title: "",
        issuer: "",
        year: "",
      },
    ],
    languages: [
      {
        name: "",
        progress: 0,
      },
    ],
    interests: [""],
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //Validate Inputs
  const validateAndNext = (e) => {};

  //Function to navigate to the next page
  const goToNextStep = () => {
    const pages = [
      "profile-info",
      "contact-info",
      "work-experience",
      "skills",
      "projects",
      "certifications",
      "additionalInfo",
    ];
  };
  //Function to navigate to the previous page
  const goBack = () => {};

  const renderForm = () => {
    switch (currentPage) {
      case "profile-info":
        return (
          <ProfileInfoForm
            profileData={resumeData?.profileInfo}
            updateSection={(key, value) => {
              updateSection("profileInfo", key, value);
            }}
            onNext={validateAndNext}
          />
        );

      case "contact-info":
        return (
          <ContactInfoForm
            contactInfo={resumeData?.contactInfo}
            updateSection={(key, value) => {
              updateSection("contactInfo", key, value);
            }}
          />
        );
      case "work-experience":
        return (
          <WorkExperienceForm
            workExperience={resumeData?.workExperience}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("workExperience", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("workExperience", newItem)}
            removeArrayItem={(index) =>
              removeArrayItem("workExperience", index)
            }
          />
        );

      case "education-info":
        return (
          <EducationDetailForm
            educationInfo={resumeData?.education}
            updateArrayItem={(index, key, value) => {
              updateArrayItem("education", index, key, value);
            }}
            addArrayItem={(newItem) => addArrayItem("education", newItem)}
            removeArrayItem={(index) => removeArrayItem("education", index)}
          />
        );

      case "skills":
        return (
          <SkillsInfoForm
            skillsInfo={resumeData?.skills}
            updateArrayItem={updateArrayItem}
            addArrayItem={(newItem) => addArrayItem("skills", newItem)}
            removeArrayItem={(index) => removeArrayItem("skills", index)}
          />
        );

      case "projects":
        return (
          <ProjectsDetailForm
            projectInfo={resumeData?.projects}
            updateArrayItem={updateArrayItem}
            addArrayItem={(newItem) => addArrayItem("projects", newItem)}
            removeArrayItem={(index) => removeArrayItem("projects", index)}
          />
        );

      case "certifications":
        return (
          <CertificationInfoForm
            certifications={resumeData?.certifications}
            updateArrayItem={(index, key, value) =>
              updateArrayItem("certifications", index, key, value)
            }
            addArrayItem={(newItem) => addArrayItem("certifications", newItem)}
            removeArrayItem={(index) =>
              removeArrayItem("certifications", index)
            }
          />
        );

      case "additionalInfo":
        return (
          <AdditionalInfoForm
            languages={resumeData?.languages}
            interests={resumeData?.interests}
            updateArrayItem={(section, index, key, value) =>
              updateArrayItem(section, index, key, value)
            }
            addArrayItem={(section, newItem) => addArrayItem(section, newItem)}
            removeArrayItem={(section, index) =>
              removeArrayItem(section, index)
            }
          />
        );

      default:
        return null;
    }
  };

  //Update simple nexted object (like profileInfo, contactInfo etc...)
  const updateSection = (section, key, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };
  //Update array item (like workexperince, skills etc...)

  const updateArrayItem = (section, index, key, value) => {
    setResumeData((prev) => {
      const updatedArray = [...prev[section]];
      updatedArray[index] = {
        ...updatedArray[index],
        [key]: value,
      };
      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  //Add item to array
  const addArrayItem = (section, newItem) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  //Remove item to array
  const removeArrayItem = (section, index) => {
    setResumeData((prev) => {
      const updatedArray = [...prev[section]];
      updatedArray.splice(index, 1);

      return {
        ...prev,
        [section]: updatedArray,
      };
    });
  };

  //Fetch resume info by ID
  const fetchResumeDetailsById = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.RESUME.GET_BY_ID(resumeId)
      );
      if (response.data && response.data.profileInfo) {
        const resumeInfo = response.data;

        setResumeData(
          (prevState = {
            ...prevState,
            title: resumeInfo?.title || "untitled",
            template: resumeInfo?.template || prevState?.template,
            profileInfo: resumeInfo?.profileInfo || prevState?.profileInfo,
            contactInfo: resumeInfo?.contactInfo || prevState?.contactInfo,
            workExperience:
              resumeInfo?.workExperience || prevState?.workExperience,
            education: resumeInfo?.education || prevState?.education,
            skills: resumeInfo?.skills || prevState?.skills,
            projects: resumeInfo?.projects || prevState?.projects,
            certificates: resumeInfo?.certificates || prevState?.certificates,
            languages: resumeInfo?.languages || prevState?.languages,
            interests: resumeInfo?.interests || prevState?.interests,
          })
        );
      }
    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  //Upload thumbnail and resume profile img
  const uploadResumeImages = async () => {};

  const updateResumeDetails = async (thumbnailLink, profilePreviewUrl) => {};

  //Delete Resume
  const handleDeleteResume = async () => {};

  //Download Resume
  const reactToPrintFn = useReactToPrint({ contentRef: resumeDownloadRef });

  //Function to update the basewidth based on the resume container line

  const updateBaseWidth = () => {};

  useEffect(() => {
    updateBaseWidth();
    window.addEventListener("resize", updateBaseWidth);
    if (!resumeId) {
      fetchResumeDetailsById;
    }

    return () => {
      window.removeEventListener("resize", updateBaseWidth);
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 md:px-6 py-6">
        {/* ===== Top Bar ===== */}
        <div className="flex items-center justify-between flex-wrap gap-3 bg-white rounded-xl border border-purple-100 shadow-sm py-3 px-4 mb-6 transition-all duration-300">
          {/* Editable Title */}
          <div className="flex items-center gap-2 flex-1 min-w-[150px]">
            <TitleInput
              title={resumeData.title}
              setTitle={(value) =>
                setResumeData((prevState) => ({
                  ...prevState,
                  title: value,
                }))
              }
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            {/* Change Theme */}
            <button
              onClick={() => setOpenThemeSelector(true)}
              className="flex items-center justify-center gap-2 px-2 sm:px-3 py-2 text-sm font-medium bg-purple-50 text-[#6d28d9] border border-purple-200 rounded-lg hover:bg-purple-100 active:scale-[0.97] transition-all"
            >
              <LuPalette size={18} />
              <span className="hidden sm:inline">Change Theme</span>
            </button>

            {/* Delete */}
            <button
              onClick={() => toast.error("Delete functionality not yet added")}
              className="flex items-center justify-center gap-2 px-2 sm:px-3 py-2 text-sm font-medium bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 active:scale-[0.97] transition-all"
            >
              <LuTrash2 size={18} />
              <span className="hidden sm:inline">Delete</span>
            </button>

            {/* Preview & Download */}
            <button
              onClick={() => setOpenPreviewModal(true)}
              className="flex items-center justify-center gap-2 px-2 sm:px-3 py-2 text-sm font-medium bg-indigo-50 text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-100 active:scale-[0.97] transition-all"
            >
              <LuDownload size={18} />
              <span className="hidden sm:inline">Preview & Download</span>
            </button>
          </div>
        </div>

        {/* ===== Form Area ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-purple-100 shadow-sm overflow-hidden transition-all">
            <StepProgress progress={0} />
            {renderForm()}

            <div className="px-5 pb-5">
              {/* Error Message */}
              {errorMsg && (
                <div className="flex items-center gap-2 text-[13px] font-medium text-amber-700 bg-amber-50 px-3 py-2 mt-3 rounded-lg">
                  <LuCircleAlert className="text-lg shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row items-center sm:justify-end justify-center gap-3 mt-6 w-full">
                {/* Back */}
                <button
                  onClick={goBack}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all active:scale-[0.97] disabled:opacity-50 w-full sm:w-auto justify-center"
                >
                  <LuArrowLeft className="text-gray-600" />
                  Back
                </button>

                {/* Save & Exit */}
                <button
                  onClick={uploadResumeImages}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#8b5cf6] hover:bg-[#7c3aed] rounded-lg transition-all active:scale-[0.97] disabled:opacity-50 w-full sm:w-auto justify-center"
                >
                  <LuSave className="text-white" />
                  {isLoading ? "Uploading..." : "Save & Exit"}
                </button>

                {/* Next */}
                <button
                  onClick={validateAndNext}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] hover:from-[#6d28d9] hover:to-[#5b21b6] rounded-lg shadow-md transition-all active:scale-[0.97] disabled:opacity-50 w-full sm:w-auto justify-center"
                >
                  {currentPage === "additionalInfo" ? (
                    <LuDownload className="text-white" />
                  ) : (
                    <LuArrowRight className="text-white" />
                  )}
                  {currentPage === "additionalInfo"
                    ? "Preview & Download"
                    : "Next"}
                </button>
              </div>
            </div>
          </div>

          <div ref={resumeRef} className="h-[100vh]">
            {/* Resume Templates */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditResume;
