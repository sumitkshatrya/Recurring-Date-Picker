import { useRecurrence } from '../context/RecurrenceContext';

export default function CustomizationControls() {
  const { interval, setInterval } = useRecurrence();

  return (
    <div className="mt-4">
      <label className="block font-medium">Repeat every:</label>
      <input
        type="number"
        className="border rounded px-2 py-1 w-20 mt-1"
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
        min="1"
      />
    </div>
  );
}

