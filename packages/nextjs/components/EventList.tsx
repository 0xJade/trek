// components/EventList.tsx
import React from "react";
import Event from "./Event";

interface EventData {
  id: number;
  name: string;
  city: string;
  date: string;
  url: string;
}

interface EventListProps {
  events: EventData[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <ul>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
