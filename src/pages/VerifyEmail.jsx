import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../app/features/authSlice";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const VerifyEmail = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [verificationState, setVerificationState] = useState("loading"); // loading, success, error

  useEffect(() => {
    const verify = async () => {
      try {
        const result = await dispatch(verifyEmail(token));
        
        if (verifyEmail.fulfilled.match(result)) {
          setVerificationState("success");
          // Redirect to dashboard after 2 seconds
          setTimeout(() => {
            navigate("/app");
          }, 2000);
        } else {
          setVerificationState("error");
        }
      } catch (error) {
        setVerificationState("error");
      }
    };

    if (token) {
      verify();
    }
  }, [token, dispatch, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-[450px] text-center border border-gray-300/60 rounded-2xl px-6 sm:px-10 py-8 sm:py-12 bg-white">
        {/* Loading State */}
        {verificationState === "loading" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Loader2 size={32} className="text-blue-600 animate-spin" />
              </div>
            </div>

            <h1 className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-3">
              Verifying Your Email
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Please wait while we verify your email address...
            </p>
          </>
        )}

        {/* Success State */}
        {verificationState === "success" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle size={32} className="text-green-600" />
              </div>
            </div>

            <h1 className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-3">
              Email Verified Successfully!
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Your email has been verified. Taking you to your dashboard...
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-gray-700 text-xs sm:text-sm">
                🎉 <span className="font-medium">Welcome aboard!</span> Redirecting you to your dashboard...
              </p>
            </div>

            <Link
              to="/app"
              className="inline-block w-full h-11 sm:h-12 rounded-full text-white bg-green-500 hover:bg-green-600 transition-all leading-[44px] sm:leading-[48px] font-medium"
            >
              Go to Dashboard Now
            </Link>
          </>
        )}

        {/* Error State */}
        {verificationState === "error" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle size={32} className="text-red-600" />
              </div>
            </div>

            <h1 className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-3">
              Verification Failed
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              We couldn't verify your email. The link may have expired or is invalid.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-left">
              <p className="text-gray-700 text-xs sm:text-sm">
                <span className="font-medium">⚠️ Common issues:</span>
                <br />
                • The verification link has expired
                <br />
                • The link has already been used
                <br />
                • The link is invalid or corrupted
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/register"
                className="w-full h-11 sm:h-12 rounded-full text-white bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center font-medium"
              >
                Register Again
              </Link>
              
              <Link
                to="/login"
                className="w-full h-11 sm:h-12 rounded-full text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 transition-all flex items-center justify-center font-medium"
              >
                Back to Login
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;