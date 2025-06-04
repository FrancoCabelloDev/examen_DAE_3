import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Route>
  </Routes>
);

export default App;
