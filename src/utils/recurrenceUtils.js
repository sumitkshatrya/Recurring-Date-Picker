import { addDays, addWeeks, addMonths, addYears, isBefore, isAfter, parseISO } from 'date-fns';

export function generateRecurringDates({ start, end, type, interval }) {
  const results = [];
  if (!start) return results;

  let current = parseISO(start);
  const limit = end ? parseISO(end) : addYears(current, 1); // Default 1-year max

  const addFn = {
    daily: addDays,
    weekly: addWeeks,
    monthly: addMonths,
    yearly: addYears,
  }[type];

  while (isBefore(current, limit) || current.toDateString() === limit.toDateString()) {
    results.push(new Date(current));
    current = addFn(current, interval);
  }

  return results;
}