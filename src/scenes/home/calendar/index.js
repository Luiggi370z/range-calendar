import moment from "moment";
import "./index.css";

const Calendar = ({ startDate, endDate, holidays }) => {
  const numberOfMonths = endDate.diff(startDate, 'month') + 1;
  const initMonth = moment(startDate.startOf('month'));
  const datesRange = Array(numberOfMonths)
    .fill(0)
    .map((item, index) => initMonth.clone().add(index, 'months'));

  return (
    <div className="calendar">
    {
        datesRange.map((date, index) => 
            <Month key={`month-${index}`} date={date} />
        )
    }
    </div>
  );
};

export default Calendar;
