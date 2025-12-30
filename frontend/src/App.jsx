import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LandingPage from './pages/LandingPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <ThemeToggle />
    </Router>
  );
}

export default App;
