import React, { useState } from "react";
import "./App.css";
import DatePicker from "./DatePicker";
import ThemeEditor from "./ThemeEditor";
import ScheduleEditor from "./ScheduleEditor";
import CalendarView from "./CalendarView";

function App() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(0);
  const [theme, setTheme] = useState({
    background: "#FFFFFF",
    color: "#000000",
    font: "Arial",
  });
  const [schedule, setSchedule] = useState([]);

  return (
    <div
      className="App"
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.font,
      }}
    >
      <p>
        <DatePicker
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
        />
        <ThemeEditor theme={theme} setTheme={setTheme} />
        <ScheduleEditor schedule={schedule} setSchedule={setSchedule} />
      </p>
      <p className="calendar">
        <CalendarView
          year={year}
          month={month}
          schedule={schedule}
          theme={theme}
        />
      </p>
      <footer>
        Software is provided as is under MIT license. No data is collected. All
        code runs in the browser on your computer.
      </footer>
    </div>
  );
}

export default App;
