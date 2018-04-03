import React from 'react';
import Day from './day';
import "./index.css";

const Week = ({ date, month, filters }) => {
  const daysOfWeek = Array(7)
    .fill()
    .map((item, index) => date.clone().add(index, "day"));

  return (
    <div className="week">
    {
        daysOfWeek.map((dayDate, index) => (
          <Day 
            key={`day-${index}`} 
            date={dayDate} 
            month={month} 
            filters={ filters }/>
        ))
    }
    </div>
  );
};

export default Week;
