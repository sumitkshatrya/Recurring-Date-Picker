import { useRecurrence } from '../context/RecurrenceContext';
import { generateRecurringDates } from '../utils/recurrenceUtils';
import { format } from 'date-fns';

export default function CalendarPreview() {
  const { recurrenceType, interval, dateRange } = useRecurrence();

  const recurringDates = generateRecurringDates({
    start: dateRange.start,
    end: dateRange.end,
    type: recurrenceType,
    interval,
  });

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Recurring Dates Preview</h2>

      {recurringDates.length === 0 ? (
        <p className="text-gray-500 italic">Select start date to preview recurring dates</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          {recurringDates.map((date, idx) => (
            <div
              key={idx}
              className="p-2 bg-blue-100 rounded text-center border"
            >
              {format(date, 'EEE, dd MMM yyyy')}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
