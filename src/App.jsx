import RecurrenceOptions from './components/RecurrenceOptions';
import CustomizationControls from './components/CustomizationControls';
import DateRangePicker from './components/DateRangePicker';
import CalendarPreview from './components/CalendarPreview';

function App() {
  return (
    <div className="min-h-screen p-6 bg-blue-600">
      <div className="max-w-3xl mx-auto bg-green-500 shadow-md rounded-lg p-6 space-y-4">
        <h1 className="text-5xl text-sky-900 text-center font-bold">Recurring Date Picker</h1>
        <RecurrenceOptions />
        <CustomizationControls />
        <DateRangePicker />
        <CalendarPreview />
      </div>
    </div>
  );
}

export default App;
