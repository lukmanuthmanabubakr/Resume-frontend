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
      </div>
    </div>
  );
};

export default Modal;
