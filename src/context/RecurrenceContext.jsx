import { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const useRecurrence = () => useContext(RecurrenceContext);

export const RecurrenceProvider = ({ children }) => {
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <RecurrenceContext.Provider value={{
      recurrenceType, setRecurrenceType,
      interval, setInterval,
      daysOfWeek, setDaysOfWeek,
      dateRange, setDateRange,
    }}>
      {children}
    </RecurrenceContext.Provider>
  );
};
