import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";

const CreateResumeForm = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle create resume
  const handleCreateResume = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a resume title");
      return;
    }

    setError("");
    try {
      // Make API call here if needed
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, {
        title,
      });
      if (response.data?._id) {
        navigate(`/resume/${response.data?._id}`);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
        Create New Resume
      </h3>
      <p className="text-gray-600 text-center text-sm mb-6">
        Give your resume a title to get started. You can edit all details later.
      </p>

      <form onSubmit={handleCreateResume} className="space-y-5">
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          label="Resume Title"
          placeholder="E.g. Legend's Resume"
          type="text"
        />

        {error && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md p-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2.5 bg-black text-white font-semibold rounded-lg hover:bg-purple-100 hover:text-black transition-all cursor-pointer"
        >
          Create Resume
        </button>

        <p className="text-center text-gray-600 text-sm mt-3">
          Want to go back?{" "}
          <button
            type="button"
            className="text-[#af71ff] font-medium hover:underline cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </p>
      </form>
    </div>
  );
};

export default CreateResumeForm;
