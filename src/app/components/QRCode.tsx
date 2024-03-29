import Image from "next/image";

const QRCode = () => {
  return (
    <>
      <div className="mt-4">
        <Image
          className="rounded-2xl p-3"
          alt="qr code"
          src="/qr.webp"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default QRCode;
