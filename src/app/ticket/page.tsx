import Image from "next/image";
import EventDetails from "../components/EventDetails";
import ToggleButton from "../components/QRToggleButton";

const TicketPage = () => {
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
            <div className="border-dashed border-b-2 mb-5 pt-4"></div>
            {/* Event Details */}
            <EventDetails />

            {/* QR Button */}
            <ToggleButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
