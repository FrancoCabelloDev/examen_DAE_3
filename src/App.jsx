// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// Componentes principales (páginas)
import HomePage from './components/HomePage.jsx'
import ItemsPage from './components/ItemsPage.jsx'
import ContactPage from './components/ContactPage.jsx'

// Header y Footer
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      {/* ToastContainer en el nivel superior */}
      <ToastContainer 
        position="bottom-right" 
        autoClose={2000} 
        hideProgressBar 
        closeOnClick 
        pauseOnHover 
      />
    </div>
  )
}
