// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import MyList from './pages/MyList';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/series/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
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
          theme="dark"
        />
      </div>
    </Router>
  );
}

export default App;