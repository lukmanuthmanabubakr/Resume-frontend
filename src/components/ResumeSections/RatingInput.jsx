import React from "react";

const RatingInput = ({
  value = 0,
  total = 5,
  onChange = () => {},
  color = "#9125E6",
  bgColor = "#E9D4FF",
}) => {
  // Convert stored value (0-100) -> star count (0-5)
  const displayValue = Math.round((value / 100) * total);

  const handleClick = (index) => {
    // Convert selected star count -> 0-100 scale for DB
    const newValue = Math.round(((index + 1) / total) * 100);
    onChange(newValue);
  };

  return (
    <div className="flex gap-2 cursor-pointer">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index < displayValue;

        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-6 h-6 rounded-md transition-all duration-200"
            style={{
              backgroundColor: isActive ? color : bgColor,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default RatingInput;
