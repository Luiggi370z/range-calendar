import React from 'react';
import "./index.css";

const Day = ({ date, month, filters }) => {
  const isOutOfMonth = date.month() != month;

  const isOutOfRange = date.isBefore(filters.startDate) || date.isAfter(filters.endDate);

  const isHoliday = (date) => 
    filters.holidays.some((holiday) => 
      date.month() + 1 === holiday.month && date.date() === holiday.day);

  const getStyle = date => {
    if (isOutOfMonth || isOutOfRange ) return 'invalid';
    if (isHoliday(date)) return 'holiday';
    if (date.weekday() === 6 || date.weekday() === 0) return "weekend";
    return "";
  };

  return (
    <div className={`day ${getStyle(date)}`}>
      {isOutOfMonth || isOutOfRange ? "" : date.format("D")}
    </div>
  );
};

export default Day;
