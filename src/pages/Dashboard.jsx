import React, { useEffect, useState, useRef } from "react";
import { dummyResumeData } from "../assets/assets";
import { LoaderCircleIcon, UploadCloud, XIcon, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import api from "../configs/api";
import pdfToText from "react-pdftotext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, token } = useSelector((state) => state.auth);

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteResumeId, setDeleteResumeId] = useState(null);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeMenu && !event.target.closest('.menu-container')) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: {
          Authorization: token,
        },
      });
      setAllResumes(data.resumes);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  const creatResume = async (event) => {
    try {
      event.preventDefault();
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAllResumes([...allResumes, data.resume]);
      setTitle("");
      setShowCreateResume(false);
      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const resumeText = await pdfToText(resume);
      const { data } = await api.post(
        "/api/ai/upload-resume",
        { title, resumeText },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTitle("");
      setResume(null);
      setShowUploadResume(false);
      navigate(`/app/builder/${data.resumeId}`);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
    setIsLoading(false);
  };

  const editTitle = async (event) => {
    try {
      event.preventDefault();
      const { data } = await api.put(
        `/api/resumes/update`,
        { resumeId: editResumeId, resumeData: { title } },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAllResumes(
        allResumes.map((resume) =>
          resume._id === editResumeId ? { ...resume, title } : resume
        )
      );
      setTitle("");
      setEditResumeId("");
      toast.success(data.message);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  const deleteResume = async (resumeId) => {
    try {
      const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, {
        headers: {
          Authorization: token,
        },
      });
      setAllResumes(allResumes.filter((resume) => resume._id !== resumeId));
      toast.success(data.message);
      setShowDeleteConfirm(false);
      setDeleteResumeId(null);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Welcome back, {user?.name}!
            </h1>
          </div>
          <p className="text-gray-600">
            Ready to build your next career opportunity?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <button
            onClick={() => setShowCreateResume(true)}
            className="group relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />

            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Create New</h3>
              <p className="text-sm text-gray-600">Start from scratch</p>
            </div>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="group relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />

            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Upload Resume
              </h3>
              <p className="text-sm text-gray-600">Import existing file</p>
            </div>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[305px]" />

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <div
                key={resume._id}
                className="group relative bg-white rounded-xl overflow-hidden border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer mx-auto w-full max-w-[280px] sm:max-w-none menu-container"
                style={{
                  borderColor: baseColor + "30",
                  aspectRatio: "8.5 / 11",
                }}
              >
                {/* Three Dots Menu Button - Always Visible */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(activeMenu === resume._id ? null : resume._id);
                  }}
                  className="absolute top-2 right-2 z-20 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md hover:bg-white transition-all"
                >
                  <MoreVertical size={16} className="text-gray-700" />
                </button>

                {/* Dropdown Menu */}
                {activeMenu === resume._id && (
                  <div
                    className="absolute top-12 right-2 z-30 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[150px]"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/app/builder/${resume._id}`);
                        setActiveMenu(null);
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Open
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditResumeId(resume._id);
                        setTitle(resume.title);
                        setActiveMenu(null);
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                      style={{ color: baseColor }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      Edit Title
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteResumeId(resume._id);
                        setShowDeleteConfirm(true);
                        setActiveMenu(null);
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-red-50 transition-colors flex items-center gap-2 text-red-600 border-t border-gray-100"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                      Delete
                    </button>
                  </div>
                )}

                {/* Resume Card Content - Click to open */}
                <div
                  onClick={() => {
                    if (!activeMenu) {
                      navigate(`/app/builder/${resume._id}`);
                    }
                  }}
                  className="h-full"
                >
                  {/* Resume Header with Color */}
                  <div
                    className="h-12 sm:h-16 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${baseColor}20, ${baseColor}50)`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 left-2 right-2 h-1 bg-white rounded-full" />
                      <div className="absolute top-4 sm:top-5 left-2 w-16 sm:w-20 h-1 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Resume Content Area */}
                  <div className="p-3 sm:p-4 flex flex-col h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)]">
                    {/* Mock Resume Lines */}
                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 flex-grow">
                      <div
                        className="h-1.5 sm:h-2 rounded-full"
                        style={{ background: baseColor + "40", width: "80%" }}
                      />
                      <div
                        className="h-1.5 sm:h-2 rounded-full"
                        style={{ background: baseColor + "20", width: "60%" }}
                      />
                      <div className="h-0.5 sm:h-1 bg-gray-200 rounded-full w-full mt-2 sm:mt-3" />
                      <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full w-full" />
                      <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full w-11/12" />
                      <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full w-10/12" />
                      <div className="h-0.5 sm:h-1 bg-gray-200 rounded-full w-full mt-1.5 sm:mt-2" />
                      <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full w-full" />
                      <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full w-9/12" />
                    </div>

                    {/* Resume Title and Date */}
                    <div className="mt-auto">
                      <h3
                        className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1 truncate group-hover:scale-105 transition-transform"
                        style={{ color: baseColor }}
                      >
                        {resume.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-gray-400">
                        {new Date(resume.updatedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modals remain the same */}
        {showCreateResume && (
          <form
            onSubmit={creatResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-50 flex items-center justify-center px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Create Resume</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 rounded"
                required
              />
              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-gray-700 transition-colors">
                Create Resume
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-50 flex items-center justify-center px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 rounded"
                required
              />

              <div>
                <label
                  htmlFor="resume-input"
                  className="block text-sm text-slate-700"
                >
                  Select resume file
                  <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
                    {resume ? (
                      <p className="text-green-700">{resume.name}</p>
                    ) : (
                      <>
                        <UploadCloud className="size-14 stroke-1" />
                        <p>Upload resume</p>
                      </>
                    )}
                  </div>
                </label>

                <input
                  type="file"
                  id="resume-input"
                  accept=".pdf"
                  hidden
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>
              <button
                disabled={isLoading}
                className="w-full py-2 bg-green-600 text-white rounded hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                {isLoading && (
                  <LoaderCircleIcon className="animate-spin size-4 text-white" />
                )}
                {isLoading ? "Uploading..." : "Upload Resume"}
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {editResumeId && (
          <form
            onSubmit={editTitle}
            onClick={() => setEditResumeId("")}
            className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-50 flex items-center justify-center px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            >
              <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Enter resume title"
                className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600 rounded"
                required
              />
              <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-gray-700 transition-colors">
                Update
              </button>
              <XIcon
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={() => {
                  setEditResumeId("");
                  setTitle("");
                }}
              />
            </div>
          </form>
        )}

        {showDeleteConfirm && (
          <div
            onClick={() => setShowDeleteConfirm(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border shadow-xl rounded-xl w-full max-w-md p-6"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-red-100 rounded-full">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <path d="M10 11v6M14 11v6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
                Delete Resume?
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to delete this resume? This action cannot
                be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeleteResumeId(null);
                  }}
                  className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  No, Cancel
                </button>
                <button
                  onClick={() => deleteResume(deleteResumeId)}
                  className="flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;