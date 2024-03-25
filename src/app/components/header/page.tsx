import Link from "next/link";

const Header = () => {
  return (
    <>
      <div>
        <Link className="mr-5 hover:text-blue-400" href="/ticket">
          Ticket Info
        </Link>
      </div>
    </>
  );
};

export default Header;
