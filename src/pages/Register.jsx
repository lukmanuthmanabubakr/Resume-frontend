import { Lock, Mail, User2Icon, Eye, EyeOff } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../app/features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);
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

    if (passwordStrength !== "strong") {
      return;
    }

    const result = await dispatch(registerUser(formData));
    if (registerUser.fulfilled.match(result)) {
      navigate("/check-email");
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

  const isButtonDisabled =
    passwordStrength !== "strong" ||
    !formData.name ||
    !formData.email ||
    !formData.password ||
    loading;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[350px] text-center border border-gray-300/60 rounded-2xl px-6 sm:px-8 bg-white"
      >
        <h1 className="text-gray-900 text-2xl sm:text-3xl mt-8 sm:mt-10 font-medium">
          Sign up
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please register to continue</p>

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-11 sm:h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2">
          <User2Icon size={16} color="#6B7280" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-none outline-none ring-0 flex-1 text-sm sm:text-base"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center w-full mt-3 sm:mt-4 bg-white border border-gray-300/80 h-11 sm:h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2">
          <Mail size={13} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-none outline-none ring-0 flex-1 text-sm sm:text-base"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-3 sm:mt-4 w-full bg-white border border-gray-300/80 h-11 sm:h-12 rounded-full overflow-hidden pl-4 sm:pl-6 gap-2 pr-3 sm:pr-4">
          <Lock size={13} color="#6B7280" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
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

        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`mt-5 sm:mt-6 w-full h-11 rounded-full text-white transition-all flex items-center justify-center ${
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:opacity-90"
          }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Loading...</span>
            </div>
          ) : (
            "Register"
          )}
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-8 sm:mb-11">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            click here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;