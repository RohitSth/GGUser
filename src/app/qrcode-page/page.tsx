import Image from "next/image";

const QRPage = () => {
  return (
    <>
      <div className="flex justify-center shadow-lg mx-auto mt-20">
        <section className="text-gray-600 body-font my-20">
          <div className="container mx-auto flex px-auto py-24 items-center justify-center flex-col shadow-blue-500 shadow-2xl">
            <Image
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="qr code"
              src="/qr.webp"
              width={300}
              height={300}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Event Name
              </h1>
              <div></div>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  QR CODE
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QRPage;
