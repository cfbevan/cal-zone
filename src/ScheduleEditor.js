import React from "react";
import "./ScheduleEditor.css";

function ScheduleEditor({ schedule, setSchedule }) {
  return (
    <div className="schedule-editor">
      <h2>Schedule</h2>
      <ul>
        {schedule.map(({ day, text, color }, index) => (
          <li key={index}>
            <input
              type="color"
              value={color}
              onChange={(e) =>
                setSchedule(
                  schedule.map((item, i) =>
                    i === index ? { ...item, color: e.target.value } : item
                  )
                )
              }
            />
            <input
              type="text"
              value={day}
              onChange={(e) =>
                setSchedule(
                  schedule.map((item, i) =>
                    i === index ? { ...item, day: e.target.value } : item
                  )
                )
              }
            />
            <input
              type="text"
              value={text}
              onChange={(e) =>
                setSchedule(
                  schedule.map((item, i) =>
                    i === index ? { ...item, text: e.target.value } : item
                  )
                )
              }
            />
            <button
              onClick={() =>
                setSchedule(schedule.filter((item, i) => i !== index))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setSchedule([
            ...schedule,
            { day: "1", time: "00:00", text: "", color: "#000000" },
          ])
        }
      >
        Add
      </button>
    </div>
  );
}

export default ScheduleEditor;
