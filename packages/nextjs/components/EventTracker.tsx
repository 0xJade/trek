// components/EventTracker.tsx
import React from "react";
import EventList from "./EventList";

interface EventData {
  id: number;
  name: string;
  city: string;
  date: string;
  url: string;
}

const eventData: EventData[] = [
  {
    id: 1,
    name: "ETH Argentina",
    city: "Buenos Aires",
    date: "2023-08-15T10:00:00",
    url: "https://ethereumargentina.org/",
  },
  {
    id: 2,
    name: "Funding The Commons & DeSci Summit",
    city: "Berlin",
    date: "2023-09-08T14:30:00",
    url: "https://fundingthecommons.io/berlin-2023",
  },
  {
    id: 3,
    name: "ETHGlobal",
    city: "New York",
    date: "2023-09-22T14:30:00",
    url: "https://ethglobal.com/events/newyork2023",
  },
  { id: 4, name: "Cosmoverse", city: "Istanbul", date: "2023-10-02T14:30:00", url: "https://cosmoverse.org/" },
  {
    id: 5,
    name: "ETHCollege",
    city: "Seattle",
    date: "2023-10-12T14:30:00",
    url: "https://www.eventbrite.com/e/eth-college-tickets-630227396107",
  },
];

const EventTracker: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-lg">Upcoming Conferences:</h1>
      <br></br>
      <EventList events={eventData} />
    </div>
  );
};

export default EventTracker;
