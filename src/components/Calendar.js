import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = [
  ["10:00", "11:00"], // Sun
  ["09:00", "12:00"], // Mon
  ["13:00"], // Tue
  ["11:00", "14:00"], // Wed
  ["14:00", "16:00"], // Thu
  ["09:00", "14:00"], // Fri
  ["11:00"] // Sat
];

// Helper to get days in month
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Helper to get first day of week for month
function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay();
}

const Calendar = () => {
  // Get current date in India timezone
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [selectedDay, setSelectedDay] = useState(now.getDate());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth);

  // Build calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null); // Empty slots before 1st
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  // Month name
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long', timeZone: 'Asia/Kolkata' }).format(new Date(currentYear, currentMonth));

  // Navigation
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
  };
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
  };

  // Highlight today
  const isToday = (day) => {
    return (
      day === now.getDate() &&
      currentMonth === now.getMonth() &&
      currentYear === now.getFullYear()
    );
  };

  return (
    <Card className="mb-3" style={{ background: "var(--white)", borderRadius: 16 }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold" style={{ color: "var(--text-primary)", fontSize: 18 }}>{monthName} {currentYear}</span>
          <div>
            <Button variant="light" size="sm" className="me-2" style={{ border: "1px solid var(--card-border)" }} onClick={goToPrevMonth}>&lt;</Button>
            <Button variant="light" size="sm" style={{ border: "1px solid var(--card-border)" }} onClick={goToNextMonth}>&gt;</Button>
          </div>
        </div>
        <div className="row g-2 mb-3">
          {weekDays.map((day, idx) => (
            <div className="col text-center" key={day}>
              <div className="text-secondary" style={{ fontWeight: 500 }}>{day}</div>
            </div>
          ))}
        </div>
        <div className="row g-2 mb-3">
          {calendarDays.map((day, idx) => (
            <div className="col text-center" key={idx}>
              {day ? (
                <div
                  className={
                    "rounded-3 fw-bold mx-auto my-1 p-2 " +
                    (selectedDay === day
                      ? "bg-primary text-white"
                      : isToday(day)
                        ? "bg-info text-white"
                        : "bg-light text-primary")
                  }
                  style={{
                    width: 40,
                    cursor: "pointer",
                    background:
                      selectedDay === day
                        ? "var(--selected-blue)"
                        : isToday(day)
                          ? "var(--healthcare-cyan)"
                          : "var(--slot-default)",
                    color:
                      selectedDay === day || isToday(day)
                        ? "#fff"
                        : "var(--text-primary)"
                  }}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </div>
              ) : (
                <div style={{ width: 40, height: 36 }}></div>
              )}
            </div>
          ))}
        </div>
        {/* Example: show time slots for selected day of week */}
        {selectedDay && (
          <div className="d-flex flex-column align-items-center mb-3">
            <div className="fw-bold mb-2" style={{ color: "var(--selected-blue)" }}>
              Time Slots for {weekDays[new Date(currentYear, currentMonth, selectedDay).getDay()]}, {selectedDay} {monthName}
            </div>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {(timeSlots[new Date(currentYear, currentMonth, selectedDay).getDay()] || []).map((slot, idx) => (
                <div
                  key={idx}
                  className="rounded-2 px-3 py-1 mb-1"
                  style={{
                    background: "var(--slot-active)",
                    color: "var(--selected-blue)",
                    fontSize: 13,
                    fontWeight: 500
                  }}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center pt-2 mt-2 border-top" style={{ borderColor: "var(--card-border)" }}>
          <span className="text-secondary" style={{ fontSize: 13 }}>Available Time Slots</span>
          <div className="d-flex align-items-center gap-3">
            <span className="d-flex align-items-center gap-1">
              <span style={{ width: 12, height: 12, background: "var(--slot-active)", borderRadius: 3, display: "inline-block" }}></span>
              <span className="text-secondary" style={{ fontSize: 12 }}>Selected Day</span>
            </span>
            <span className="d-flex align-items-center gap-1">
              <span style={{ width: 12, height: 12, background: "var(--slot-default)", borderRadius: 3, display: "inline-block" }}></span>
              <span className="text-secondary" style={{ fontSize: 12 }}>Available</span>
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Calendar; 