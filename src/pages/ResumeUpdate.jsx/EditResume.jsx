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
    certificates: [
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
  const goToNextStep = () => {};
  //Function to navigate to the previous page
  const goBack = () => {};

  const renderForm = () => {
    switch (currentPage) {
      case "profile-info":
        return (
          <ProfileInfoForm
            profileData={resumeData?.profileData}
            updateSection={(key, value) => {
              updateSection("profileInfo", key, value);
            }}
            onNext={validateAndNext}
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
  const updateArrayItem = (section, index, key, value) => {};

  //Add item to array
  const addArrayItem = (section, newItem) => {};

  //Remove item to array
  const removeArrayItem = (section, newItem) => {};

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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white rounded-xl border border-purple-100 shadow-sm py-4 px-5 mb-6 transition-all duration-300">
          {/* Editable Title */}
          <TitleInput
            title={resumeData.title}
            setTitle={(value) =>
              setResumeData((prevState) => ({
                ...prevState,
                title: value,
              }))
            }
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 sm:gap-3 w-full md:w-auto">
            <button
              onClick={() => setOpenThemeSelector(true)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-100 active:scale-[0.97] transition-all w-full sm:w-auto justify-center"
            >
              <LuPalette size={16} className="shrink-0" />
              <span>Change Theme</span>
            </button>

            <button
              onClick={() => toast.error("Delete functionality not yet added")}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 active:scale-[0.97] transition-all w-full sm:w-auto justify-center"
            >
              <LuTrash2 size={16} className="shrink-0" />
              <span>Delete</span>
            </button>

            <button
              onClick={() => setOpenPreviewModal(true)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 active:scale-[0.97] transition-all w-full sm:w-auto justify-center"
            >
              <LuDownload size={16} className="shrink-0" />
              <span>Preview & Download</span>
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
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 mt-5">
                <button
                  onClick={goBack}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all active:scale-[0.97] disabled:opacity-50"
                >
                  <LuArrowLeft className="text-gray-600" />
                  Back
                </button>

                <button
                  onClick={uploadResumeImages}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#7b3eff] hover:bg-[#5f1de0] rounded-lg transition-all active:scale-[0.97] disabled:opacity-50"
                >
                  <LuSave className="text-white" />
                  {isLoading ? "Uploading..." : "Save & Exit"}
                </button>

                <button
                  onClick={validateAndNext}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all active:scale-[0.97] disabled:opacity-50"
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

  // return (
  //   <DashboardLayout>
  //     <div className="container mx-auto px-4 md:px-8 py-6">
  //       {/* Top Bar */}
  //       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white border border-purple-100 rounded-xl shadow-sm p-4 md:p-5 mb-6">
  //         <TitleInput
  //           title={resumeData.title}
  //           setTitle={(value) =>
  //             setResumeData((prevState) => ({ ...prevState, title: value }))
  //           }
  //         />

  //         <div className="flex flex-wrap items-center gap-2 sm:gap-3">
  //           <button
  //             onClick={() => toast("Theme selector coming soon")}
  //             className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-100 transition"
  //           >
  //             <LuPalette size={16} />
  //             Change Theme
  //           </button>

  //           <button
  //             onClick={() => toast.error("Delete functionality not yet added")}
  //             className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition"
  //           >
  //             <LuTrash2 size={16} />
  //             Delete
  //           </button>

  //           <button
  //             onClick={() => toast("Preview coming soon")}
  //             className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
  //           >
  //             <LuDownload size={16} />
  //             Preview & Download
  //           </button>
  //         </div>
  //       </div>

  //       {/* Form Section Placeholder */}
  //       <div className="bg-white rounded-xl border border-purple-100 shadow-sm p-6">
  //         <p className="text-gray-500 text-center italic">
  //           Resume editor form will appear here.
  //         </p>

  //         {errorMsg && (
  //           <div className="mt-4 flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
  //             <LuCircleAlert size={18} />
  //             {errorMsg}
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </DashboardLayout>
  // );
};

export default EditResume;
