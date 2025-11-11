import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-green-900 to-green-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-11 h-11 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            B
          </div>
          <span className="text-2xl font-bold">BuildIt</span>
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-green-100">
          Empowering job seekers worldwide with AI-powered resume building tools. 
          Create professional, ATS-friendly resumes that help you land your dream job.
        </p>
      </div>
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal text-green-200">
          ResumeAI ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;