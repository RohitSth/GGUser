const EventListItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <li className="w-1/2 mb-1 my-2">
      <h2 className="title-font font-bold text-gray-800 tracking-wider text-sm mb-0">
        {title}
      </h2>
      <p>{value}</p>
    </li>
  );
};

export default EventListItem;
