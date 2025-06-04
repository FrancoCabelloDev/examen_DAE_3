import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import ItemsPage from './components/ItemsPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <Header />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}