import Image from "next/image";

const QRPage = () => {
  return (
    <>
      <div className="flex justify-center  mx-auto mt-20 py-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
          {/* Event Image  */}
          <Image
            className="rounded-2xl p-3"
            alt="qr code"
            src="/qr.webp"
            width={400}
            height={400}
          />

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Events name
              </h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRPage;
