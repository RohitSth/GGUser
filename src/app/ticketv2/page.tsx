"use client";

import Image from "next/image";
import { useState } from "react";

import EventDetails from "../components/event-details/page";
import QRCode from "../components/qr-code/page";

const TicketPage = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  return (
    <>
      <div className="flex justify-center  mx-auto mt-8 py-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
          {/* Event Image  */}
          <Image
            className="rounded-2xl p-3"
            alt="event's picture"
            src="/image.png"
            width={400}
            height={400}
          />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Events name
              </h5>
            </a>
            {/* Event Details */}
            <EventDetails />

            {/* QR Code */}
            {showQRCode && <QRCode />}

            {/* <QRToggle /> */}
            <div className="flex justify-center mt-2">
              <button
                onClick={toggleQRCode}
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                type="button"
              >
                {showQRCode ? "HIDE" : "QR CODE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
