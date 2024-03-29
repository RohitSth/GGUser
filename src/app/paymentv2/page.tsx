import Image from "next/image";

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
            <a href="/components/payment/purchase-ticket">
              <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Purchase Ticket
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
