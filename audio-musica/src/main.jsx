// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FavoritesProvider } from './components/FavoritesContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  </React.StrictMode>
);
