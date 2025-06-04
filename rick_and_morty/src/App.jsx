// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import CharactersPage from './components/CharacterPage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal que usaremos como flex-column */}
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
