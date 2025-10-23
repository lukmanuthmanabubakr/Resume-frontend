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
  const fetchResumeDetailsById = (async) => {
    
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditResume;
