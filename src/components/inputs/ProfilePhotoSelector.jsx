import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      if (setPreview) setPreview(preview);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (setPreview) setPreview(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-2">
      {/* Hidden input */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* If no image uploaded */}
      {!image && !previewUrl ? (
        <div className="relative w-20 h-20 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
          <LuUser className="text-gray-400 text-3xl" />
          <button
            type="button"
            onClick={onChooseFile}
            className="absolute bottom-1 right-1 bg-[#af71ff] text-white p-1.5 rounded-full hover:bg-black transition"
          >
            <LuUpload className="text-xs" />
          </button>
        </div>
      ) : (
        <div className="relative w-20 h-20">
          <img
            src={preview || previewUrl}
            alt="Profile"
            className="w-full h-full object-cover rounded-full border border-gray-200 shadow-sm"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute bottom-1 right-1 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition"
          >
            <LuTrash className="text-xs" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
