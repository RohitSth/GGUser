"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import { useState } from "react";
import QRCode from "qrcode";

const QRCodeComponent = () => {
  const [src, setSrc] = useState("");
  const pathname = usePathname();
  QRCode.toDataURL(pathname).then(setSrc);

  return (
    <>
      <Image
        className="object-cover rounded-xl mx-auto"
        alt="qr code"
        src={src}
        width={200}
        height={200}
      />
    </>
  );
};

export default QRCodeComponent;
