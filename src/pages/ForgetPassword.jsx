import { Mail, ArrowLeft } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../app/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [email, setEmail] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(forgotPassword(email));
    if (forgotPassword.fulfilled.match(result)) {
      setEmail("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[400px] text-center border border-gray-300/60 rounded-2xl px-6 sm:px-8 bg-white"
      >
        {/* Icon */}
        <div className="flex justify-center mt-8 sm:mt-10 mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Mail size={28} className="text-green-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-medium">
          Forgot Password?
        </h1>
        <p className="text-gray-500 text-sm mt-2 mb-6">
          No worries! Enter your email and we'll send you reset instructions.
        </p>

        {/* Email Input */}
        <div className="flex items-center w-full mt-6 bg-white border border-gray-300/80 h-11 sm:h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2">
          <Mail size={13} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-none outline-none ring-0 flex-1 text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !email}
          className={`mt-6 w-full h-11 sm:h-12 rounded-full text-white transition-all flex items-center justify-center ${
            loading || !email
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            "Send Reset Link"
          )}
        </button>

        {/* Back to Login */}
        <Link
          to="/login"
          className="flex items-center justify-center gap-2 text-gray-600 hover:text-green-600 text-sm mt-4 mb-8 sm:mb-10 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </form>
    </div>
  );
};

export default ForgetPassword;
