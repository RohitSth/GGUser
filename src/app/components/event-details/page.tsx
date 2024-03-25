const EventDetails = () => {
  return (
    <div className="flex flex-col">
      <nav className="flex flex-wrap list-none mb-1">
        <li className="w-1/2 mb-1 my-2">
          <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-0">
            NAME
          </h2>
          <p>Person Name</p>
        </li>
        <li className="w-1/2 mb-1 my-2">
          <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-0">
            DATE
          </h2>
          <p>25 March 2025</p>
        </li>
        <li className="w-1/2 mb-1 my-2">
          <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-0">
            TIME
          </h2>
          <p>16:04</p>
        </li>
        <li className="w-1/2 mb-1 my-2">
          <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-0">
            SEAT
          </h2>
          <p>QYAT67F</p>
        </li>
        <li className="w-1/2 mb-1 my-2">
          <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-0">
            LOCATION
          </h2>
          <p>3553 Essex Court, Burlington </p>
        </li>
      </nav>
    </div>
  );
};

export default EventDetails;
