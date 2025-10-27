import React from "react";
import Input from "../../../components/inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import RatingInput from "../../../components/ResumeSections/RatingInput";

const SkillsInfoForm = ({
  skillsInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900 pb-3">Skills</h2>

      <div className="mt-4 flex flex-col gap-5">
        {skillsInfo.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-300/70 shadow-sm rounded-xl p-5 bg-gray-50 relative"
          >
            {/* Delete Button */}
            {skillsInfo.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem(index)}
                className="absolute top-3 right-3 text-red-600 hover:text-red-700 cursor-pointer"
              >
                <LuTrash2 size={18} />
              </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Skill Name"
                placeholder="JavaScript"
                type="text"
                value={skill.name || ""}
                onChange={({ target }) =>
                  updateArrayItem("skills", index, "name", target.value)
                }
              />

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Proficiency ({(skill.progress ?? 0) / 20} / 5)
                </label>
                <RatingInput
                  value={skill.progress || 0}
                  total={5}
                  onChange={(newValue) =>
                    updateArrayItem("skills", index, "progress", newValue)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        {/* Add Button */}
        <div className="flex justify-start">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-md transition"
            onClick={() =>
              addArrayItem({
                name: "",
                progress: 0,
              })
            }
          >
            <LuPlus />
            Add Skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsInfoForm;
