import { Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../app/features/authSlice";
import { Link, useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [passwordStrength, setPasswordStrength] = React.useState("");

  const calculatePasswordStrength = (password) => {
    if (password.length === 0) return "";

    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    if (strength <= 2) return "weak";
    if (strength <= 4) return "fair";
    return "strong";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    if (passwordStrength !== "strong") {
      return;
    }

    const result = await dispatch(
      resetPassword({ token, password: formData.password })
    );
    
    if (resetPassword.fulfilled.match(result)) {
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "weak":
        return "bg-red-500";
      case "fair":
        return "bg-yellow-500";
      case "strong":
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  const getStrengthWidth = () => {
    switch (passwordStrength) {
      case "weak":
        return "w-1/3";
      case "fair":
        return "w-2/3";
      case "strong":
        return "w-full";
      default:
        return "w-0";
    }
  };

  const passwordsMatch = formData.password === formData.confirmPassword;
  const isButtonDisabled =
    passwordStrength !== "strong" ||
    !passwordsMatch ||
    !formData.password ||
    !formData.confirmPassword ||
    loading;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[400px] text-center border border-gray-300/60 rounded-2xl px-6 sm:px-8 bg-white"
      >
        {/* Icon */}
        <div className="flex justify-center mt-8 sm:mt-10 mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Lock size={28} className="text-green-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-medium">
          Reset Password
        </h1>
        <p className="text-gray-500 text-sm mt-2 mb-6">
          Create a strong new password for your account
        </p>

        {/* New Password Input */}
        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-11 sm:h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2 pr-3 sm:pr-4">
          <Lock size={13} color="#6B7280" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="New Password"
            className="border-none outline-none ring-0 flex-1 text-sm sm:text-base"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
          >
            {showPassword ? (
              <EyeOff size={16} color="#6B7280" />
            ) : (
              <Eye size={16} color="#6B7280" />
            )}
          </button>
        </div>

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="mt-3 px-1 sm:px-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600">Password Strength:</span>
              <span
                className={`text-xs font-medium capitalize ${
                  passwordStrength === "weak"
                    ? "text-red-500"
                    : passwordStrength === "fair"
                    ? "text-yellow-500"
                    : passwordStrength === "strong"
                    ? "text-green-500"
                    : ""
                }`}
              >
                {passwordStrength}
              </span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${getStrengthColor()} ${getStrengthWidth()}`}
              ></div>
            </div>
            {passwordStrength !== "strong" && (
              <p className="text-xs text-gray-500 mt-2 text-left">
                Use 8+ characters with uppercase, lowercase, numbers & symbols
              </p>
            )}
          </div>
        )}

        {/* Confirm Password Input */}
        <div className="flex items-center mt-3 sm:mt-4 w-full bg-white border border-gray-300/80 h-11 sm:h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2 pr-3 sm:pr-4">
          <Lock size={13} color="#6B7280" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="border-none outline-none ring-0 flex-1 text-sm sm:text-base"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="focus:outline-none"
          >
            {showConfirmPassword ? (
              <EyeOff size={16} color="#6B7280" />
            ) : (
              <Eye size={16} color="#6B7280" />
            )}
          </button>
        </div>

        {/* Password Match Indicator */}
        {formData.confirmPassword && (
          <div className="mt-2 flex items-center justify-start gap-2 px-2">
            {passwordsMatch ? (
              <>
                <CheckCircle size={14} className="text-green-500" />
                <span className="text-xs text-green-600">Passwords match</span>
              </>
            ) : (
              <>
                <span className="text-xs text-red-500">
                  Passwords do not match
                </span>
              </>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`mt-6 w-full h-11 sm:h-12 rounded-full text-white transition-all flex items-center justify-center ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Resetting...</span>
            </div>
          ) : (
            "Reset Password"
          )}
        </button>

        {/* Back to Login */}
        <Link
          to="/login"
          className="block text-gray-600 hover:text-green-600 text-sm mt-4 mb-8 sm:mb-10 transition-colors"
        >
          Back to Login
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;