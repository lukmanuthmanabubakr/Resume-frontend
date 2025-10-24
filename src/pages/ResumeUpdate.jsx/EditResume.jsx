import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  LuArrowLeft,
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

  const renderForm = () => {};

  //Update simple nexted object (like profileInfo, contactInfo etc...)
  const updateSection = (section, key, value) => {};
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
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-5 bg-white rounded-lg border border-purple-100 py-3 px-4 mb-4">
          <TitleInput
            title={resumeData.title}
            setTitle={(value) =>
              setResumeData((prevState) => ({
                ...prevState,
                title: value,
              }))
            }
          />

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setOpenThemeSelector(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm bg-purple-50 text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-100 transition cursor-pointer w-full sm:w-auto justify-center"
            >
              <LuPalette size={16} className="shrink-0" />
              <span>Change Theme</span>
            </button>

            <button
              onClick={() => toast.error("Delete functionality not yet added")}
              className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition cursor-pointer w-full sm:w-auto justify-center"
            >
              <LuTrash2 size={16} className="shrink-0" />
              <span>Delete</span>
            </button>

            <button
              onClick={() => setOpenPreviewModal(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition cursor-pointer w-full sm:w-auto justify-center"
            >
              <LuDownload size={16} className="shrink-0" />
              <span>Preview & Download</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-lg border border-purple-100 overflow-hidden">
            {renderForm()}
            <div className=" mx-5">
              {errorMsg && (
                <div className="flex items-center gap-2 text-[13px] font-medium text-amber-600 bg-amber-100 px-2 py-0.5 my-1 rounded">
                  <LuCircleAlert className="text-md" />
                  {errorMsg}
                </div>
              )}

              <div className="flex items-end justify-end gap-3 mt-3 mb-5">
                <button className="" onClick={goBack} disabled={isLoading}>
                  <LuArrowLeft className="" />
                  Back
                </button>
                <button
                  className=""
                  onClick={uploadResumeImages}
                  disabled={isLoading}
                >
                  <LuSave className="" />
                  {isLoading ? "Uploading..." : "Save and Exit"}
                </button>
                <button
                  className=""
                  onClick={validateAndNext}
                  disabled={isLoading}
                >
                  {currentPage === "additionalInfo" && (
                    <LuDownload className="" />
                  )}
                  {currentPage === "additionalInfo"
                    ? "Preview & Download"
                    : "Next"}
                  {currentPage !== "additionalInfo" && (
                    <LuArrowLeft className="" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div ref={resumeRef} className="">
          {/* Resume Templates */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditResume;
