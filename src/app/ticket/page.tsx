"use client";

import Image from "next/image";
import EventDetails from "../components/EventDetails";
import QRCodeComponent from "../components/QRCodeComponent";
import { useState } from "react";

const TicketPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div className="flex justify-center mx-auto mt-8 py-4">
        {/* Event Image  */}
        <div className="group h-72 w-96 p-3 [prespective:1000px]">
          {/* Flip the card when clicked */}
          <div
            className={`relative h-full w-full rounded-xl shadow-md transition-all duration-500  [transform-style:preserve-3d] 
            ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
            onClick={handleFlip}
          >
            <div className="absolute inset-0">
              <Image
                className="object-cover shadow-black/40 rounded-lg shadow-xl"
                alt="event's picture"
                src="/image1.png"
                fill={true}
              />
              <div className="absolute p-5 text-white">
                <div className="flex justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                    Events name
                  </h5>
                  <Image width={50} height={50} src="/logo.png" alt="logo" />
                </div>
                {/* Event Details */}
                <EventDetails />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center h-full w-full rounded-lg bg-black/75 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <QRCodeComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
