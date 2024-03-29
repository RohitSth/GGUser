"use client";

import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
const QRreader = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false
    );
    scanner.render(success, error);

    function success(data: string) {
      scanner.clear();
      console.log(data);
    }

    function error(error: string) {
      console.warn(error);
    }
  }, []);

  return (
    <>
      {scanResult ? (
        <div>
          Success : <a href={"http://" + scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </>
  );
};

export default QRreader;
