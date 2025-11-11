import React from "react";
import { Zap } from "lucide-react"; 


const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-4 py-1 mb-8">
        <Zap width={14}/>
        <span>Resume Boost</span>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <h1 className="text-3xl font-semibold text-center mx-auto text-slate-800">
        BuildIt Features
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Everything you need to create professional, ATS-friendly resumes in
        minutes.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0">
        {/* Feature 1 */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm hover:shadow-lg transition">
          <div className="p-6 aspect-square bg-green-100 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16A34A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l5 5v11a2 2 0 0 1-2 2z"></path>
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              AI-Powered Resume Generation
            </h3>
            <p className="text-sm text-slate-600">
              Create professional resumes using AI suggestions tailored to your
              job title.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-blue-200 gap-6 max-w-sm hover:shadow-lg transition">
          <div className="p-6 aspect-square bg-blue-100 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              One-Click Export
            </h3>
            <p className="text-sm text-slate-600">
              Export your resume in PDF or Word format instantly.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm hover:shadow-lg transition">
          <div className="p-6 aspect-square bg-orange-100 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EA580C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1v22"></path>
              <path d="M5 6h14"></path>
              <path d="M5 18h14"></path>
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Ready-to-Use Templates
            </h3>
            <p className="text-sm text-slate-600">
              Choose from beautifully designed resume templates optimized for
              ATS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
