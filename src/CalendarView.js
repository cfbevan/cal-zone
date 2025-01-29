import React from "react";
import DayView from "./DayView";
import "./CalendarView.css";

const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};
const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const generateCalendar = (month, year) => {
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let first_day = new Date(year, month);

  let cal = [];
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    if (i >= first_day.getDay()) {
      cal.push(i - first_day.getDay() + 1);
    } else {
      cal.push("");
    }
  }
  return cal.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 7);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
};

function CalendarView({ year, month, schedule, theme }) {
  const cal = generateCalendar(month, year);
  return (
    <div
      className="calendar"
      style={{
        background: theme.background,
        color: theme.color,
        fontFamily: theme.font,
      }}
    >
      <h2>
        {month_names[month]} {year}
      </h2>
      <table
        cellspacing="0"
        cellpadding="21"
        style={{ border: `1px solid ${theme.color}` }}
      >
        <thead>
          <tr>
            <th style={{ border: `1px solid ${theme.color}` }}>Sun</th>
            <th style={{ border: `1px solid ${theme.color}` }}>Mon</th>
            <th style={{ border: `1px solid ${theme.color}` }}>Tue</th>
            <th style={{ border: `1px solid ${theme.color}` }}>Wed</th>
            <th style={{ border: `1px solid ${theme.color}` }}>Thu</th>
            <th style={{ border: `1px solid ${theme.color}` }}>Fri</th>
            <th style={{ border: `1px solid ${theme.color}` }}>Sat</th>
          </tr>
        </thead>

        <tbody>
          {cal.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <DayView
                  key={j}
                  day={day}
                  schedule={schedule.filter((d) => d.day == day)}
                  theme={theme}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarView;
