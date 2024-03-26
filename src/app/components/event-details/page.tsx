import EventListItem from "../event-list-item/page";

const EventDetails = () => {
  return (
    <div className="flex flex-col">
      <nav className="flex flex-wrap list-none mb-1">
        <EventListItem title="NAME" value="Person Name" />
        <EventListItem title="DATE" value="25 March 2025" />
        <EventListItem title="TIME" value="16:04" />
        <EventListItem title="SEAT" value="QYAT67F" />
        <EventListItem
          title="LOCATION"
          value="1634 Fittro Street, Little Rock"
        />
      </nav>
    </div>
  );
};

export default EventDetails;
