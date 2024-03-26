"use client";

import { useState } from "react";

const PaymentToggleButton = () => {
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
          PAY
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
              <h3 className="text-lg font-semibold text-gray-900">
                Payment Info
              </h3>
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
            {/* Payment Info*/}
            <div className="bg-gray-100 mt-4">
              <div className="bg-white p-6  md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="text-green-600 w-16 h-16 mx-auto my-6"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Payment Done!
                  </h3>
                  <p className="text-gray-600 my-2">
                    Thank you for completing your secure online payment.
                  </p>
                  <p> Have a great day! </p>
                  <div className="py-10 text-center">
                    <a
                      href="#"
                      onClick={toggleModal}
                      className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-3xl"
                    >
                      GO BACK
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentToggleButton;
