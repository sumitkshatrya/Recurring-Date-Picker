import { useRecurrence } from '../context/RecurrenceContext';

export default function DateRangePicker() {
  const { dateRange, setDateRange } = useRecurrence();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-4 space-y-4">
      <div>
        <label className="block font-semibold mb-1">Start Date</label>
        <input
          type="date"
          name="start"
          value={dateRange.start}
          onChange={handleChange}
          className="border rounded px-3 py-1 w-full"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">End Date (Optional)</label>
        <input
          type="date"
          name="end"
          value={dateRange.end}
          onChange={handleChange}
          className="border rounded px-3 py-1 w-full"
        />
      </div>
    </div>
  );
}
