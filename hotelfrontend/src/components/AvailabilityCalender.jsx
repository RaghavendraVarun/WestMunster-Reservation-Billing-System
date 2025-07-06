import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const formatDate = (date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}/${mm}/${dd}`;
};

export const AvailabilityCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState([]);
  const navigate = useNavigate();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const handleChange = (day) => {
    if (!day) return;
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (clickedDate < today) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
      setSelectedRange([clickedDate]);
    } else if (clickedDate < startDate) {
      setStartDate(clickedDate);
      setEndDate(null);
      setSelectedRange([clickedDate]);
    } else {
      setEndDate(clickedDate);
      const datesInRange = [];
      let current = new Date(startDate);
      while (current <= clickedDate) {
        datesInRange.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
      setSelectedRange(datesInRange);
    }
  };

  const isSelected = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return selectedRange.some(
      d =>
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
    );
  };

  const isPastDate = (day) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return date < today;
  };

  const formatToDDMMYYYY = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = [];
    let day = 1;
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day++);
        }
      }
      calendar.push(week);
    }
    return calendar;
  };

  const goToAvailability = () => {
    const formatted = selectedRange.map(d => formatToDDMMYYYY(d));
    localStorage.setItem("selectedDates", JSON.stringify(formatted));
    localStorage.setItem("selectedDateCount", selectedRange.length.toString());
    navigate("/availability");
  };

  const calendar = generateCalendar();

  const glass = {
    background: 'rgba(255,255,255,0.30)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.18)',
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url("/images/location.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        transform: 'translateZ(0)'
      }}>
      <button
        onClick={() => navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
      <div style={{
        minHeight: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "sans-serif"
      }}>
        <div style={{
          ...glass,
          backgroundColor: "black",
          padding: "1.5rem",
          borderRadius: "12px",
          width: "350px",
          textAlign: "center"
        }}>
          <style>{`
            .calendar-button {
              background-color: #1e1e1e;
              border: none;
              color: white;
              border-radius: 6px;
              height: 40px;
              width: 40px;
              font-size: 0.9rem;
              cursor: pointer;
            }
            .calendar-button:hover {
              background-color: #444;
            }
            .calendar-button.selected {
              background-color: #fff;
              color: black;
              font-weight: bold;
            }
            .calendar-button.disabled {
              color: gray;
              cursor: not-allowed;
              opacity: 0.4;
              background-color: #2a2a2a;
            }
            .calendar-nav-btn {
              background: transparent;
              border: none;
              color: white;
              font-size: 1.2rem;
              cursor: pointer;
            }
          `}</style>

          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem"
          }}>
            <button className="calendar-nav-btn" onClick={() => changeMonth(-1)}><ChevronLeft /></button>
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <button className="calendar-nav-btn" onClick={() => changeMonth(1)}><ChevronRight /></button>
          </div>

          {/* Weekdays */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            color: "#ccc",
            fontWeight: "bold",
            marginBottom: "8px"
          }}>
            {dayNames.map((d, i) => <div key={i}>{d}</div>)}
          </div>

          {/* Calendar Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" }}>
            {calendar.flat().map((day, idx) => {
              if (!day) return <div key={idx} />;
              const disabled = isPastDate(day);
              const selected = isSelected(day);
              return (
                <button
                  key={idx}
                  onClick={() => !disabled && handleChange(day)}
                  className={`calendar-button ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
                  disabled={disabled}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Selected Dates Info */}
          {startDate && endDate && (
            <>
              <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#ccc" }}>
                <div><strong>Start:</strong> {formatDate(startDate)}</div>
                <div><strong>End:</strong> {formatDate(endDate)}</div>
                <div><strong>Total Dates:</strong> {selectedRange.length}</div>
              </div>
              <button
                className="btn-continue"
                onClick={goToAvailability}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem",
                  width: "100%",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Continue
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
