import React from "react";
import Input from "../../../components/inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

const SkillsInfoForm = (
  skillsInfo,
  updateArrayItem,
  addArrayItem,
  removeArrayItem
) => {
  return (
    <div className="">
      <h2 className="">Skills</h2>
      <div className="">
        {skillsInfo.map((skill, index) => {
          <div key={index} className="">
            <div className="">
              <Input
                label="Skill Name"
                placeholder="ABC Corp"
                type="text"
                value={experience.company || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "company", target.value)
                }
              />
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default SkillsInfoForm;
