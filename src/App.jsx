import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MovieSearch from './components/MovieSearch';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscar" element={<MovieSearch />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
