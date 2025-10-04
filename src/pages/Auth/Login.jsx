import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";

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

        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="sample@gmail.com"
          type="text"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="sample@gmail.com"
          type="password"
        />

        <button
          type="button"
          className="w-full py-2.5 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all cursor-pointer"
        >
          Log In
        </button>

        <p className="text-center text-gray-600 text-sm mt-3">
          Don't have an account ?{" "}
          <button
            type="button"
            className="text-[#7182ff] font-medium hover:underline cursor-pointer"
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
