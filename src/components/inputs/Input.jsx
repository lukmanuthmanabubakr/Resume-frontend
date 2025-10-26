import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full mb-3">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-300 transition-all duration-200">
        <input
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-800 text-sm"
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={18}
                className="text-purple-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaRegEyeSlash
                size={18}
                className="text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
