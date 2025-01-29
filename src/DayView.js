import React from "react";
import "./DayView.css";

function DayView({ day, schedule, theme }) {
  return (
    <td style={{ border: `1px solid ${theme.color}` }}>
      <div
        className="day-view"
        style={{
          background: theme.background,
          color: theme.color,
          fontFamily: theme.font,
        }}
      >
        <div className="day">{day}</div>
        <ul>
          {schedule.map(({ color, text }) => (
            <div className="item" style={{ color }}>
              {text}
            </div>
          ))}
        </ul>
      </div>
    </td>
  );
}

export default DayView;
