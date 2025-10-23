import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ProfileInfoCard from "../Cards/ProfileInfoCard";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm py-3 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-50">
      {/* Left Section - Logo */}
      <Link
        to="/"
        className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#af71ff] transition"
      >
        Legend <span className="text-[#af71ff]">Resume</span>
      </Link>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <ProfileInfoCard />
        ) : (
          <button
            onClick={() => navigate("/")}
            className="bg-[#af71ff] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-black transition-colors"
          >
            Login / Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
