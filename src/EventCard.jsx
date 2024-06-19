import React from "react";
import { createEvent } from "./objectArray";

const EventCard = () => {
  return (
    <div className="event-card-container">
      {createEvent.map((event) => (
        <div key={event.event_Id} className="event-card">
          <div
            className="event-thumbnail"
            style={{
              backgroundImage: `url(${event.event_Thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "200px",
              height: "200px", // Set the dimensions according to your design
            }}
          />
          <div className="event-contents">
            <h2>{event.event_Title}</h2>
            <p>{event.event_Date}</p>
            <p>Venue: {event.event_Venue}</p>
            <p>Speaker: {event.event_Speaker}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
