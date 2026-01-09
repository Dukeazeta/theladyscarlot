import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import ThemeToggle, { ThemeProvider } from './components/ThemeToggle';
import LandingPage from './pages/LandingPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const hostname = window.location.hostname;

  // Handle subdomain masking
  if (hostname === 'terms.theladyscarlot.com') {
    return (
      <ThemeProvider>
        <Terms />
      </ThemeProvider>
    );
  }

  if (hostname === 'privacy.theladyscarlot.com') {
    return (
      <ThemeProvider>
        <Privacy />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ThemeToggle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
