"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center">
        <Link
          className={`mr-5 text-xl ${
            pathname === "/ticket" ? "text-blue-600" : ""
          }`}
          href="/ticket"
        >
          Ticket V1
        </Link>
        <Link
          className={`mr-5 text-xl ${
            pathname === "/ticketv2" ? "text-blue-600" : ""
          }`}
          href="/ticketv2"
        >
          Ticket V2
        </Link>
        <Link
          className={`mr-5 text-xl ${
            pathname === "/payment" ? "text-blue-600" : ""
          }`}
          href="/payment"
        >
          Payment
        </Link>
      </div>
    </>
  );
};

export default Header;
