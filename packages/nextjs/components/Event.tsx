// components/Event.tsx
import React from "react";

interface EventData {
  id: number;
  name: string;
  city: string;
  date: string;
  url: string;
}

interface EventProps {
  event: EventData;
}

const eventStyles = {
  eventItem: {
    marginBottom: "20px",
    borderRadius: "10px", // Adding rounded edges
    padding: "10px",
    border: "1px solid #ccc",
    background: "linear-gradient(to right, #ff6b6b, #556270)", // Adding gradient background
    backgroundColor: "#f5f5f5",
  },
  eventName: {
    fontSize: "1.2rem",
    fontWeight: "bold", // Adding bold font weight
    color: "#000",
  },
  eventDate: {
    fontSize: "1rem",
    color: "#fff",
  },
};

const Event: React.FC<EventProps> = ({ event }) => {
  return (
    <li style={eventStyles.eventItem}>
      <h3 style={eventStyles.eventName}>
        <a href={event.url} target="_blank" rel="noopener noreferrer">
          {event.name}, {event.city}
        </a>
      </h3>
      <p style={eventStyles.eventDate}>Date: {new Date(event.date).toLocaleString()}</p>
    </li>
  );
};

export default Event;
