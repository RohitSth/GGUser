import Image from "next/image";
import EventDetails from "../components/event-details/page";

const TicketPage = () => {
  return (
    <>
      <div className="flex justify-center  mx-auto mt-20 py-4">
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

            {/* QR Button */}
            <div className="mt-2 flex justify-center">
              <a
                href="/qrcode-page"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                QR CODE
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketPage;
