import React from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CheckVerEmail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-[450px] text-center border border-gray-300/60 rounded-2xl px-6 sm:px-10 py-8 sm:py-12 bg-white">
        {/* Email Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Mail size={32} className="text-green-500" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-3">
          Check Your Email
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
          We've sent a verification link to your email address.
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          Please check your inbox and click on the link to verify your account.
        </p>

        {/* Info Box */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-left">
          <p className="text-gray-700 text-xs sm:text-sm">
            <span className="font-medium">📧 Didn't receive the email?</span>
            <br />
            Check your spam folder or try registering again.
          </p>
        </div>

        {/* Back to Login */}
        <Link
          to="/login"
          className="flex items-center justify-center gap-2 text-green-500 hover:underline text-sm sm:text-base"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default CheckVerEmail;