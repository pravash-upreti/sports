import React from "react";

const MatchTime = ({ day = "FEB 23", time = "11:30 AM" }) => (
  <div className="date-time-container">
    <span className="day">{day}</span>
    <span className="time"> {time}</span>
  </div>
);

export default MatchTime;
