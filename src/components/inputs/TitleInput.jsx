// import React, { useState } from "react";
// import { LuCheck, LuPencil } from "react-icons/lu";

// const TitleInput = ({ title, setTitle }) => {
//   const [showInput, setShowInput] = useState(false);

//   const handleSave = () => {
//     if (title.trim() === "") return;
//     setShowInput(false);
//   };

//   return (
//     <div className="flex items-center gap-2">
//       {showInput ? (
//         <>
//           <input
//             type="text"
//             placeholder="Resume title"
//             className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#af71ff] transition"
//             value={title}
//             onChange={({ target }) => setTitle(target.value)}
//             autoFocus
//           />
//           <button
//             type="button"
//             onClick={handleSave}
//             className="p-2 bg-[#af71ff] hover:bg-black text-white rounded-lg transition-all"
//             title="Save"
//           >
//             <LuCheck size={18} />
//           </button>
//         </>
//       ) : (
//         <>
//           <h2 className="text-xl font-semibold text-gray-900 truncate">
//             {title || "Untitled Resume"}
//           </h2>
//           <button
//             type="button"
//             onClick={() => setShowInput(true)}
//             className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition-all"
//             title="Edit title"
//           >
//             <LuPencil size={18} />
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default TitleInput;

























import React, { useState } from "react";
import { LuCheck, LuPencil } from "react-icons/lu";

const TitleInput = ({ title, setTitle }) => {
  const [showInput, setShowInput] = useState(false);

  const handleSave = () => {
    if (title.trim() === "") return;
    setShowInput(false);
  };

  return (
    <div className="flex items-center gap-2 w-full">
      {showInput ? (
        <>
          <input
            type="text"
            placeholder="Resume title"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#7b3eff] transition"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            autoFocus
          />
          <button
            type="button"
            onClick={handleSave}
            className="p-2 bg-[#7b3eff] hover:bg-[#5f1de0] text-white rounded-lg transition-all"
            title="Save"
          >
            <LuCheck size={18} />
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-gray-900 truncate max-w-[200px] sm:max-w-none">
            {title || "Untitled Resume"}
          </h2>
          <button
            type="button"
            onClick={() => setShowInput(true)}
            className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition-all"
            title="Edit title"
          >
            <LuPencil size={18} />
          </button>
        </>
      )}
    </div>
  );
};

export default TitleInput;
