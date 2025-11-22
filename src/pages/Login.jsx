import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../app/features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(formData));
    if (loginUser.fulfilled.match(result)) {
      navigate("/app");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
        <p className="text-gray-500 text-sm mt-2">Please login to continue</p>

        <div className="flex items-center w-full mt-6 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={13} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-none outline-none ring-0 flex-1"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 pr-4">
          <Lock size={13} color="#6B7280" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0 flex-1"
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

        <div className="mt-4 text-left text-green-500">
          <Link to="/forgot-password" className="text-sm">
            Forget password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-2 w-full h-11 rounded-full text-white transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:opacity-90"
          }`}
        >
          {loading ? "Loading..." : "Login"}
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500 hover:underline">
            click here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;