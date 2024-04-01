"use client";

import Image from "next/image";
import { useState } from "react";
import QRCode from "qrcode";

const QRCodeComponent = () => {
  // const [username, setUsername] = useState("");
  const [src, setSrc] = useState("");

  const generateQR = () => {
    // QRCode.toDataURL(`https://github.com/${username}`).then(setSrc);
    QRCode.toDataURL("https://github.com/RohitSth").then(setSrc);
  };

  return (
    <>
      <Image
        className="object-cover rounded-xl mx-auto"
        alt="qr code"
        onClick={generateQR}
        // src="/qr.webp"
        src={src}
        width={200}
        height={200}
      />
    </>
  );
};

export default QRCodeComponent;
