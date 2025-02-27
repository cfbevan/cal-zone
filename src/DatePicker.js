import React from "react";
import "./DatePicker.css";

function DatePicker({ year, setYear, month, setMonth }) {
  return (
    <div class="date-picker">
      <h2>Date</h2>
      <select
        type="select"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="0">January</option>
        <option value="1">February</option>
        <option value="2">March</option>
        <option value="3">April</option>
        <option value="4">May</option>
        <option value="5">June</option>
        <option value="6">July</option>
        <option value="7">August</option>
        <option value="8">September</option>
        <option value="9">October</option>
        <option value="10">November</option>
        <option value="11">December</option>
      </select>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    </div>
  );
}

export default DatePicker;
