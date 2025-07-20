import { useRecurrence } from '../context/RecurrenceContext';

const options = ['daily', 'weekly', 'monthly', 'yearly'];

export default function RecurrenceOptions() {
  const { recurrenceType, setRecurrenceType } = useRecurrence();

  return (
    <div className="space-y-2">
      <h2 className="font-semibold text-lg">Recurrence Options</h2>
      <div className="flex gap-4">
        {options.map(option => (
          <label key={option} className="flex items-center gap-1">
            <input
              type="radio"
              name="recurrence"
              value={option}
              checked={recurrenceType === option}
              onChange={() => setRecurrenceType(option)}
            />
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
}
