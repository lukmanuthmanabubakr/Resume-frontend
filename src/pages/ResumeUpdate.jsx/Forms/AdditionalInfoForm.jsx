import React from "react";
import Input from "../../../components/inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import RatingInput from "../../../components/ResumeSections/RatingInput";

const AdditionalInfoForm = ({
  languages,
  interests,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Additional Info
      </h2>

      {/* ---------- LANGUAGES SECTION ---------- */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-800 mb-3">Languages</h3>

        <div className="flex flex-col gap-4">
          {languages?.map((lang, index) => (
            <div
              key={index}
              className="border border-gray-200/80 p-4 rounded-lg relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Language"
                  placeholder="e.g. English"
                  type="text"
                  value={lang.name || ""}
                  onChange={({ target }) =>
                    updateArrayItem("languages", index, "name", target.value)
                  }
                />

                <div className="flex flex-col gap-2">
                  <label className="text-gray-700 text-sm font-medium">
                    Proficiency
                  </label>

                  <RatingInput
                    value={lang.progress || 0}
                    onChange={(value) =>
                      updateArrayItem("languages", index, "progress", value)
                    }
                    total={5}
                    activeColor="#0ea5e9"
                    placeholder="#e0f2fe"
                  />
                </div>
              </div>

              {languages.length > 1 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("languages", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
            onClick={() => addArrayItem("languages", { name: "", progress: 0 })}
          >
            <LuPlus /> Add Language
          </button>
        </div>
      </div>

      {/* ---------- INTERESTS SECTION ---------- */}
      <div>
        <h3 className="text-md font-medium text-gray-800 mb-3">Interests</h3>

        <div className="flex flex-col gap-4">
          {interests?.map((interest, index) => (
            <div
              key={index}
              className="border border-gray-200/80 p-4 rounded-lg relative"
            >
              <Input
                label="Interest"
                placeholder="e.g. Reading"
                type="text"
                value={interest || ""}
                onChange={({ target }) =>
                  updateArrayItem("interests", index, null, target.value)
                }
              />

              {interests.length > 1 && (
                <button
                  className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => removeArrayItem("interests", index)}
                >
                  <LuTrash2 />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
            onClick={() => addArrayItem("interests", "")}
          >
            <LuPlus /> Add Interest
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
