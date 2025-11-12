import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  const handleEdit = (id) => {
    console.log("Edit resume:", id);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log("Delete resume:", id);
    // Add your delete logic here
    setAllResumes(allResumes.filter((resume) => resume.id !== id));
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
              Welcome back, David!
            </h1>
          </div>
          <p className="text-gray-600">
            Ready to build your next career opportunity?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <button className="group relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

          <button className="group relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <div
                key={resume.id}
                className="group relative bg-white rounded-xl overflow-hidden border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: baseColor + "30",
                  aspectRatio: "8.5 / 11",
                }}
              >
                {/* Resume Header with Color */}
                <div
                  className="h-16 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${baseColor}20, ${baseColor}50)`,
                  }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 left-2 right-2 h-1 bg-white rounded-full" />
                    <div className="absolute top-5 left-2 w-20 h-1 bg-white rounded-full" />
                  </div>
                </div>

                {/* Resume Content Area */}
                <div className="p-4 flex flex-col h-[calc(100%-4rem)]">
                  {/* Mock Resume Lines */}
                  <div className="space-y-2 mb-4 flex-grow">
                    <div
                      className="h-2 rounded-full"
                      style={{ background: baseColor + "40", width: "80%" }}
                    />
                    <div
                      className="h-2 rounded-full"
                      style={{ background: baseColor + "20", width: "60%" }}
                    />
                    <div className="h-1 bg-gray-200 rounded-full w-full mt-3" />
                    <div className="h-1.5 bg-gray-100 rounded-full w-full" />
                    <div className="h-1.5 bg-gray-100 rounded-full w-11/12" />
                    <div className="h-1.5 bg-gray-100 rounded-full w-10/12" />
                    <div className="h-1 bg-gray-200 rounded-full w-full mt-2" />
                    <div className="h-1.5 bg-gray-100 rounded-full w-full" />
                    <div className="h-1.5 bg-gray-100 rounded-full w-9/12" />
                  </div>

                  {/* Resume Title */}
                  <div className="mt-auto">
                    <h3
                      className="text-xs font-semibold mb-1 truncate group-hover:scale-105 transition-transform"
                      style={{ color: baseColor }}
                    >
                      {resume.title}
                    </h3>
                    <p className="text-[10px] text-gray-400">
                      {new Date(resume.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay with Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(resume.id);
                      }}
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                      style={{
                        color: baseColor,
                      }}
                      title="Edit Resume"
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
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(resume.id);
                      }}
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
                      style={{
                        color: "#dc2626",
                      }}
                      title="Delete Resume"
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
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showCreateResume && (
          <form className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
            <div>
              <h2>Create Resume</h2>
              <input type="text" placeholder="Enter resume title"/>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
