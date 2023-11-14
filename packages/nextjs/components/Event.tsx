import React, { useEffect, useState } from "react";

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
  eventsContainer: {
    background: "#333", // Terminal-like background color
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid #00ff00", // Big border like a terminal
    margin: "10px", // Add some margin for spacing
    overflow: "hidden", // Hide overflow to remove the white border
  },
  eventName: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#00CC00",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 1)",
    display: "inline-block", // Display letters sequentially
    opacity: 50, // Initial opacity
  },
  eventDate: {
    fontSize: "1rem",
    color: "#00CC00",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
    display: "inline-block", // Display letters sequentially
    opacity: 50, // Initial opacity
  },
};

const Event: React.FC<EventProps> = ({ event }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay between events (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ ...eventStyles.eventsContainer, opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
      <h3>
        <a href={event.url} target="_blank" rel="noopener noreferrer">
          <span style={eventStyles.eventName}>
            {event.name}, {event.city}
          </span>
        </a>
      </h3>
      <p style={eventStyles.eventDate}>{event.date}</p>
    </div>
  );
};

export default Event;
