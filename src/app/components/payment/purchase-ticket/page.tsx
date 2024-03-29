import PaymentSuccess from "../PaymentSuccess";
import Image from "next/image";

export default function PurchaseTicket() {
  return (
    <>
      <div className="flex justify-center  mx-auto mt-8 py-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="relative">
            {/* Event Image  */}
            <Image
              className="rounded-2xl p-3"
              alt="event's picture"
              src="/image.png"
              width={400}
              height={400}
            />
            <div className="absolute flex flex-col items-center top-6 left-6 bg-white p-2 rounded-md">
              <p className="">29</p>
              <p>Mar</p>
            </div>
            <div className="absolute flex flex-col items-center top-6 right-6 bg-white p-2 rounded-md">
              <p className="text-sm">Price</p>
              <p className="text-lg font-bold text-blue-500">$ 10</p>
            </div>
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Events name
              </h5>
            </a>
            <div className="border-dashed border-b-2 mb-5 pt-2"></div>
            <div className="flex justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Quantity
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PaymentSuccess />
        </div>
      </div>
    </>
  );
}
