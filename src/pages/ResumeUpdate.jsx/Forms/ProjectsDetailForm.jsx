import React from "react";
import Input from "../../../components/inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

const ProjectsDetailForm = ({
  projectInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900 pb-3">Projects</h2>

      <div className="mt-4 flex flex-col gap-5">
        {projectInfo.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300/70 shadow-sm rounded-xl p-5 bg-gray-50 relative"
          >
            {/* Delete Button */}
            {projectInfo.length > 1 && (
              <button
                type="button"
                onClick={() => removeArrayItem(index)}
                className="absolute top-3 right-3 text-red-600 hover:text-red-700 cursor-pointer"
              >
                <LuTrash2 size={18} />
              </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Title */}
              <Input
                label="Project Title"
                placeholder="Portfolio Website"
                type="text"
                value={project.title || ""}
                onChange={({ target }) =>
                  updateArrayItem("projects", index, "title", target.value)
                }
              />

              {/* Github Link */}
              <Input
                label="Github Link"
                placeholder="https://github.com/username/project"
                type="url"
                value={project.github || ""}
                onChange={({ target }) =>
                  updateArrayItem("projects", index, "github", target.value)
                }
              />
            </div>

            {/* Description */}
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Description
              </label>
              <textarea
                placeholder="Short description about the project"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 focus:outline-none bg-white resize-none"
                rows={3}
                value={project.description || ""}
                onChange={({ target }) =>
                  updateArrayItem("projects", index, "description", target.value)
                }
              />
            </div>

            {/* Live Demo */}
            <div className="mt-4">
              <Input
                label="Live Demo URL"
                placeholder="https://yourproject.live"
                type="url"
                value={project.liveDemo || ""}
                onChange={({ target }) =>
                  updateArrayItem("projects", index, "liveDemo", target.value)
                }
              />
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
                title: "",
                description: "",
                github: "",
                liveDemo: "",
              })
            }
          >
            <LuPlus />
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetailForm;
