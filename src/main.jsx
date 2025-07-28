import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import { NicknameProvider } from './contexts/NicknameContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NicknameProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </NicknameProvider>
    </BrowserRouter>
  </StrictMode>
);
