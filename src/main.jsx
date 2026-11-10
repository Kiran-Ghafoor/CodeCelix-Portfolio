import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rawPath = window.location.pathname;
const cleanPath = rawPath.replace(/\/+$/, '') || '/';
if (cleanPath === '/projects' && rawPath !== cleanPath) {
  window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
}

createRoot(document.getElementById('root')).render(<App />);
