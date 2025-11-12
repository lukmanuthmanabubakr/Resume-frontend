import React from "react";
import { Plus, Upload } from "lucide-react";

const Dashboard = () => {
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
                <Plus size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Create New</h3>
              <p className="text-sm text-gray-600">Start from scratch</p>
            </div>
          </button>

          {/* Upload Resume */}
          <button className="group relative overflow-hidden bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />

            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Upload size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Upload Resume
              </h3>
              <p className="text-sm text-gray-600">Import existing file</p>
            </div>
          </button>
        </div>

        <hr className=" border-slate-300 my-6 sm:w-[305px]" />
      </div>
    </div>
  );
};

export default Dashboard;
