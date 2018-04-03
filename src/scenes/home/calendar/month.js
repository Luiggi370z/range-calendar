import React from 'react';
import Week from './week';
import { daysNames } from '../../../models/enums'
import "./index.css";

const Month = ({ date, filters }) => {
  const weeksOfMonth = date => {
    let week = date.clone().startOf("month").startOf("week");
    let weeks = [];
    do {
      weeks.push(week.clone());
      week.add(1, "week");
    } while (week.month() === date.month() && week.isBefore(filters.endDate));
    return weeks;
  };

  const renderWeekDays = () =>
    daysNames.map((dName, index) => (
      <div key={index} className="weekdays">
        {dName}
      </div>
    ));

  return (
    <div className="month">
      <div>{renderWeekDays()}</div>
      <div className="month-header">{date.format("MMMM YYYY")}</div>
      {
        weeksOfMonth(date).map((weekDate, index) => (
          <Week
            key={`week-${index}`}
            date={weekDate}
            month={date.month()}
            filters={ filters }
          />
        ))
      }
    </div>
  );
};

export default Month;
