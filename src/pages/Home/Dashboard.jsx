// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../utils/axiosInstance";
// import { API_PATHS } from "../../utils/apiPath";
// import DashboardLayout from "../../components/layouts/DashboardLayout";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const [openCreateModal, setOpenCreateModal] = useState(false);
//   const [allResumes, setAllResumes] = useState(null);

//   const fetchAllResumes = async () => {
//     try {
//       const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
//       setAllResumes(response.data);
//     } catch (error) {
//       console.error("Error fetching resumes", error);
//     }
//   };

//   useEffect(() => {
//     fetchAllResumes();
//   }, []);
//   return (
//     <DashboardLayout>
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
//         <div className="" onClick={() => setOpenCreateModal(true)}>
//           <div className=""></div>
//           <h1 className="">Add New Resume</h1>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { Plus } from "lucide-react";
import ResumeSummaryCard from "../../components/Cards/ResumeSummaryCard";
import moment from "moment";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [allResumes, setAllResumes] = useState([]);

  const fetchAllResumes = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      setAllResumes(response.data || []);
    } catch (error) {
      console.error("Error fetching resumes", error);
    }
  };

  useEffect(() => {
    fetchAllResumes();
  }, []);

  return (
    <DashboardLayout>
      <div className="w-full px-4 md:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Resumes</h1>
            <p className="text-gray-500 text-sm">
              Manage, edit, and create your resumes in one place.
            </p>
          </div>

          <button
            onClick={() => setOpenCreateModal(true)}
            className="mt-4 md:mt-0 bg-[#af71ff] hover:bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
          >
            + Create New Resume
          </button>
        </div>

        {/* Resume Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Add New Resume Card */}
          <div
            onClick={() => setOpenCreateModal(true)}
            className="group border border-dashed border-gray-300 bg-gray-50 hover:bg-[#f6f1ff] rounded-xl flex flex-col items-center justify-center p-10 cursor-pointer transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-[#af71ff]/10 flex items-center justify-center mb-3 group-hover:bg-[#af71ff]/20">
              <Plus className="text-[#af71ff]" size={28} />
            </div>
            <h3 className="text-sm font-semibold text-gray-700 group-hover:text-[#af71ff]">
              Add New Resume
            </h3>
          </div>

          {/* Existing Resumes */}
          {allResumes.length > 0 ? (
            allResumes.map((resume) => (
              <ResumeSummaryCard
                key={resume?._id}
                imgUrl={resume?.thumbnailLink}
                title={resume?.title || "Untitled Resume"}
                lastUpdated={
                  resume?.updatedAt
                    ? moment(resume.updatedAt).format("MMM DD, YYYY")
                    : "N/A"
                }
                onSelect={() => navigate(`/resume/${resume?._id}`)}
              />
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center mt-10">
              You haven’t created any resumes yet.
            </p>
          )}
        </div>
      </div>

      {/* Modal */}
      {openCreateModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpenCreateModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Create New Resume
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              This is a placeholder modal — add your creation form here.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setOpenCreateModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenCreateModal(false)}
                className="px-4 py-2 text-sm font-semibold bg-[#af71ff] text-white rounded-md hover:bg-black transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
