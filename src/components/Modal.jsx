import React from "react";

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick,
}) => {
  return (
    <div className="">
      <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        {hideHeader && (
          <div className="">
            <h3 className="">{title}</h3>
            {showActionBtn && (
              <button className="" onClick={() => onActionClick()}>
                {actionBtnIcon}
                {actionBtnText}
              </button>
            )}
          </div>
        )}

        <button type="button" className="" onClick={onclose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=""
            fill="none"
            viewBox="0 0 14 14"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
