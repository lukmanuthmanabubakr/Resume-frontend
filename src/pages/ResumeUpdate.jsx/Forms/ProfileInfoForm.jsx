import React from "react";
import ProfilePhotoSelector from "../../../components/inputs/ProfilePhotoSelector";
import Input from "../../../components/inputs/Input";

const ProfileInfoForm = ({ profileData = {}, updateSection }) => {
  return (
    <div className="px-6 py-6">
      {/* === Header === */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Personal Information
        </h2>
      </div>

      <div className="mt-6 space-y-6">
        {/* === Profile Photo === */}
        <div className="flex justify-center">
          <ProfilePhotoSelector
            image={profileData?.profileImg || profileData?.profilePreviewUrl}
            setImage={(value) => updateSection("profileImg", value)}
            preview={profileData?.profilePreviewUrl}
            setPreview={(value) =>
              updateSection("profilePreviewUrl", value)
            }
          />
        </div>

        {/* === Form Inputs === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <Input
            value={profileData?.fullName || ""}
            onChange={({ target }) => updateSection("fullName", target.value)}
            label="Full Name"
            placeholder="John Doe"
            type="text"
          />

          {/* Designation */}
          <Input
            value={profileData?.designation || ""}
            onChange={({ target }) =>
              updateSection("designation", target.value)
            }
            label="Designation"
            placeholder="Backend Developer"
            type="text"
          />
        </div>

        {/* Summary */}
        <div className="mt-2">
          <label className="text-xs font-medium text-gray-700 mb-1 block">
            Summary
          </label>
          <textarea
            placeholder="Write a short professional introduction..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 transition-all resize-none"
            rows={4}
            value={profileData?.summary || ""}
            onChange={({ target }) => updateSection("summary", target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoForm;
