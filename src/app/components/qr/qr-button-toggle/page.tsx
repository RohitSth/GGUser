"use client";

import { useState } from "react";
import QRCode from "../qr-code/page";

const ToggleButton = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Modal toggle */}
      <div className="mt-2 flex justify-center">
        <button
          onClick={toggleModal}
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          type="button"
        >
          QR CODE
        </button>
      </div>

      {/* Main modal */}
      {showModal && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2">
            {/* Modal header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-900">QR CODE</h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* QRCode */}
            <QRCode />
          </div>
        </div>
      )}
    </>
  );
};

export default ToggleButton;
