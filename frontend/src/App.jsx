import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Services />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
