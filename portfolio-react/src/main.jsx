import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import "@fontsource/outfit";
import "@fontsource/roboto";

// Rendering the App component into the root container
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
