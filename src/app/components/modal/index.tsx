// components/Modal.js
"use client";

import { useEffect } from "react";

const Modal = ({ children, onClose }: any) => {
  // Close the modal when the backdrop is clicked
  const handleBackdropClick = (event: any) => {
    if (event.target.id === "modalBackdrop") {
      onClose();
    }
  };

  // Close the modal on pressing the Escape key
  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      id="modalBackdrop"
      className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex"
      onClick={handleBackdropClick}
    >
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
