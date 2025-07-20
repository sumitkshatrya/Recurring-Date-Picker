import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecurrenceProvider } from './context/RecurrenceContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecurrenceProvider>
      <App />
    </RecurrenceProvider>
  </React.StrictMode>
);
