import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter your full name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }

    setError("");

    // Signup API call
    try {
      // your signup logic here
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-[90%] max-w-sm mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
        Create an Account
      </h3>
      <p className="text-gray-600 text-center mt-1 mb-5 text-sm sm:text-base">
        Join us today by entering your details below
      </p>

      <form onSubmit={handleSignUp} className="space-y-4">
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="Your name"
          type="text"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="sample@gmail.com"
          type="text"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />
        {error && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md p-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-semibold rounded-lg hover:bg-purple-100 hover:text-black transition-all cursor-pointer"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-600 text-sm mt-3">
          Already have an account?{" "}
          <button
            type="button"
            className="text-[#af71ff] font-medium hover:underline cursor-pointer"
            onClick={() => setCurrentPage("login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
