import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';

// Importar fuentes
import '@fontsource-variable/open-sans';
import '@fontsource-variable/roboto';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);