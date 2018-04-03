import React from 'react';
import "./index.css";

const Day = ({ date, month }) => {
  const isOutOfMonth = date.month() != month;
  const getStyle = date => {
    if (date.weekday() === 6 || date.weekday() === 0) return "weekend";
    return "";
  };

  return (
    <div className={`day ${getStyle(date)}`}>
      {isOutOfMonth ? "" : date.format("D")}
    </div>
  );
};

export default Day;
