import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {};

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h3 className="text-2xl font-bold text-gray-900 text-center">
        Welcome Back
      </h3>
      <p className="text-gray-600 text-center mt-2 mb-6">
        Please enter your details to log In
      </p>

      <form onSubmit={handleLogin} className="space-y-5">
        {error && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md p-2">
            {error}
          </p>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#7182ff] transition"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#3cff52] transition"
          />
        </div>

        <button
          type="button"
          className="w-full py-2.5 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
        >
          Log In
        </button>

        <p className="text-center text-gray-600 text-sm mt-3">
          Don't have an account ?{" "}
          <button
            type="button"
            className="text-[#7182ff] font-medium hover:underline"
            onClick={() => setCurrentPage("signup")}
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
