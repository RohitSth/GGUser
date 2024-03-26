import Link from "next/link";

const Header = () => {
  return (
    <>
      <div>
        <Link className="mr-5 hover:text-blue-400" href="/ticket">
          Ticket V1
        </Link>
        <Link className="mr-5 hover:text-blue-400" href="/ticketv2">
          Ticket V2
        </Link>
      </div>
    </>
  );
};

export default Header;
