import Image from "next/image";
import QR from "../components/payment/qr-reader/page";
import PaymentToggleButton from "../components/payment/payment-info-toggle/page";

const PaymentPage = () => {
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
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Events name
              </h5>
            </a>
            <div className="border-dashed border-b-2 mb-5 pt-2"></div>
            <div>
              <h4>DESCRIPTION</h4>
              <p className="mt-4 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                possimus, culpa placeat quam rerum aperiam sit animi, sed, nulla
                quibusdam facilis blanditiis minima reiciendis. Eum fuga
                laboriosam adipisci totam libero.
              </p>
            </div>
          </div>
          <div className="flex justify-between px-4">
            <div>
              <p className="text-sm">Price</p>
              <p className="text-lg font-bold text-blue-500">$ 10</p>
            </div>
            <PaymentToggleButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
