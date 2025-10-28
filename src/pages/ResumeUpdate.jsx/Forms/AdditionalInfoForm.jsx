import React from "react";

const AdditionalInfoForm = ({
  languages,
  interests,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return <div className="">
    <h2 className="">Additional Info</h2>
    <div className="">
      <h3 className="">Languages</h3>
      <div className="">
        {languages?.map((lang, index) => {
          <div className="" key={index}>
            <div className="">
              <Input />
            </div>
          </div>
        })}
      </div>
    </div>
  </div>;
};


export default AdditionalInfoForm;
